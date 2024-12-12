import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { paginationOptsValidator } from "convex/server";

export const create = mutation({
  args: {
    title: v.optional(v.string()),
    initialContent: v.optional(v.string()),
  },
  handler: async (ctx, { title, initialContent }) => {
    const user = await ctx.auth.getUserIdentity();

    if (!user) {
      throw new ConvexError("Unauthorized");
    }

    return await ctx.db.insert("documents", {
      title: title ?? "Untitled Document",
      initialContent,
      ownerId: user.subject,
    });
  },
});

export const get = query({
  args: {
    paginationOpts: paginationOptsValidator,
    search: v.optional(v.string()),
  },
  handler: async (ctx, { search, paginationOpts }) => {
    const user = await ctx.auth.getUserIdentity();
    if (!user) throw new ConvexError("Unauthorized");

    if (search) {
      return await ctx.db
        .query("documents")
        .withSearchIndex("search_title", (q) =>
          q.search("title", search).eq("ownerId", user.subject)
        ).paginate(paginationOpts);
    }

    return await ctx.db.query("documents").withIndex("by_owner_id",(q)=>q.eq("ownerId", user.subject)).paginate(paginationOpts);
  },
});

export const removeById = mutation({
  args: {
    documentId: v.id("documents"),
  },
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity();
    if (!user) throw new ConvexError("Unauthorized");

    const document = await ctx.db.get(args.documentId);
    if (!document) return new ConvexError("Document not found");

    const isOwner = document.ownerId === user.subject;
    if (!isOwner)
      return new ConvexError("You are not the owner of this document");

    return await ctx.db.delete(args.documentId);
  },
});

export const updateById = mutation({
  args: {
    documentId: v.id("documents"),
    title: v.string(),
  },
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity();
    if (!user) throw new ConvexError("Unauthorized");

    const document = await ctx.db.get(args.documentId);
    if (!document) return new ConvexError("Document not found");

    const isOwner = document.ownerId === user.subject;
    if (!isOwner)
      return new ConvexError("You are not the owner of this document");

    return await ctx.db.patch(args.documentId, {
      title: args.title,
    });
  },
});
