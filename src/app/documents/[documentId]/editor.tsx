"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import StarterKit from "@tiptap/starter-kit";
import Blockquote from '@tiptap/extension-blockquote'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import Image from '@tiptap/extension-image'
import ImageResize from "tiptap-extension-resize-image"
import { useEditorStore } from "@/store/use-editor-store";
import Underline from '@tiptap/extension-underline'
import Highlight from '@tiptap/extension-highlight'
import {Color} from '@tiptap/extension-color'
import FontFamily from '@tiptap/extension-font-family'
import TextStyle from '@tiptap/extension-text-style'
import Link from '@tiptap/extension-link'
import TextAlign from '@tiptap/extension-text-align'
import { FontSize } from "@/extensions/font-size";
import { LineHeight } from "@/extensions/line-height";
import {Ruler} from "./ruler";
import { useLiveblocksExtension } from "@liveblocks/react-tiptap";
import { Threads } from "./threads";
import { useStorage } from "@liveblocks/react";


interface EditorProps {
  initialContent?: string | undefined;
}

export const Editor =({initialContent}: EditorProps)=>{

  const leftMargin = useStorage((root)=> root.leftMargin);
  const rightMargin = useStorage((root)=> root.rightMargin);

  const {setEditor} = useEditorStore();
  const liveblocksExtension = useLiveblocksExtension({initialContent,offlineSupport_experimental: true});

  const editor = useEditor({
    autofocus: true,
    immediatelyRender: false,
    onCreate({ editor }) {
      setEditor(editor);
    },
    onDestroy() {
      setEditor(null);
    },
    onUpdate({ editor }) {
      setEditor(editor);
    },
    onSelectionUpdate({ editor }) {
      setEditor(editor);
    },
    onTransaction({ editor }) {
      setEditor(editor);
    },
    onBlur({ editor }) {
      setEditor(editor);
    },
    onFocus({ editor }) {
      setEditor(editor);
    },
    onContentError({ editor }) {
      setEditor(editor);
    },
    editorProps: {
      attributes:{
        style:`padding-left: ${leftMargin ?? 56}px !important; padding-right: ${rightMargin ?? 56}px !important;`,
        class:"focus:outline-none print-border-0 border border-[#c7c7c7] shadow-md flex flex-col min-h-[900px] w-[816px] pt-10 pr-14 pb-10 cursor-text"
      },
    },
    extensions: [
      StarterKit,
      liveblocksExtension,
      LineHeight,
      FontSize,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      TaskItem.configure({
        nested: true
      }),
      TaskList,
      Blockquote,
      Image,
      ImageResize,
      Table.configure({
        resizable: true
      }),
      TableRow,
      TableHeader,
      TableCell,
      Underline,
      Highlight.configure({
        multicolor: true
      }),
      FontFamily,
      TextStyle,
      Color,
      Link.configure({
        openOnClick:false,
        autolink:true,
        defaultProtocol:"https://",
        // protocols: ['http', 'https'],
        // isAllowedUri: (url, ctx) => {
        //   try {
        //     // construct URL
        //     const parsedUrl = url.includes(':') ? new URL(url) : new URL(`${ctx.defaultProtocol}://${url}`)

        //     // use default validation
        //     if (!ctx.defaultValidate(parsedUrl.href)) {
        //       return false
        //     }

        //     // disallowed protocols
        //     const disallowedProtocols = ['ftp', 'file', 'mailto']
        //     const protocol = parsedUrl.protocol.replace(':', '')

        //     if (disallowedProtocols.includes(protocol)) {
        //       return false
        //     }

        //     // only allow protocols specified in ctx.protocols
        //     const allowedProtocols = ctx.protocols.map(p => (typeof p === 'string' ? p : p.scheme))

        //     if (!allowedProtocols.includes(protocol)) {
        //       return false
        //     }

        //     // disallowed domains
        //     const disallowedDomains = ['example-phishing.com', 'malicious-site.net']
        //     const domain = parsedUrl.hostname

        //     if (disallowedDomains.includes(domain)) {
        //       return false
        //     }

        //     // all checks have passed
        //     return true
        //   } catch (error) {
        //     return false
        //   }
        // },
        // shouldAutoLink: url => {
        //   try {
        //     // construct URL
        //     const parsedUrl = url.includes(':') ? new URL(url) : new URL(`https://${url}`)

        //     // only auto-link if the domain is not in the disallowed list
        //     const disallowedDomains = ['example-no-autolink.com', 'another-no-autolink.com']
        //     const domain = parsedUrl.hostname

        //     return !disallowedDomains.includes(domain)
        //   } catch (error) {
        //     return false
        //   }
        // },
      })

    ],
  });

  return (
    <div className="size-full overflow-x-auto bg-[#f9fbfd] px-4 print:p-0 print:bg-white print:overflow-visible">
      <Ruler/>
      <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">

      <EditorContent editor={editor} />
      <Threads editor={editor} />
      </div>
    </div>
  )
}