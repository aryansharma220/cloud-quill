"use client";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useEditorStore } from "@/store/use-editor-store";

import { type Level} from "@tiptap/extension-heading";
import { type ColorResult,CompactPicker,SketchPicker} from 'react-color'
import {
  BoldIcon,
  ChevronDownIcon,
  HighlighterIcon,
  ItalicIcon,
  ListTodoIcon,
  LucideIcon,
  MessageSquarePlusIcon,
  PrinterIcon,
  Redo2Icon,
  RemoveFormattingIcon,
  SpellCheckIcon,
  StrikethroughIcon,
  UnderlineIcon,
  Undo2Icon,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";





const HighlightColorButton = () => {
  const { editor } = useEditorStore();

  const value = editor?.getAttributes("highlight").color || "#F8F79C";

  const onChange = (color: ColorResult) => {
    editor?.chain().focus().setHighlight({color: color.hex}).run();
  }

  return(
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="h-7 min-w-7 shrink-0 flex flex-col items-center justify-center rounded-sm border border-neutral-200 px-1.5 overflow-hidden text-sm hover:bg-neutral-200/80">
          <HighlighterIcon className="size-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-0 shadow-md" sideOffset={5}>
        <CompactPicker  color={value} onChange={onChange} />
      </DropdownMenuContent>
    </DropdownMenu>
  )

}

const TextColorButton = () => {
  const { editor } = useEditorStore();
  const value = editor?.getAttributes("textStyle").color || "#000000";

  const onChange = (color: ColorResult) => {
    editor?.chain().focus().setColor(color.hex).run();
  }

  return(
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="h-7 min-w-7 shrink-0 flex flex-col items-center justify-center rounded-sm border border-neutral-200 px-1.5 overflow-hidden text-sm hover:bg-neutral-200/80">
          <span className="text-xs">
            A
          </span>
          <div className="h-0.5 w-full" style={{ backgroundColor: value }} ></div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-0 shadow-md" sideOffset={5}>
        <SketchPicker  color={value} onChange={onChange} />
      </DropdownMenuContent>
    </DropdownMenu>
  )

}

const HeadingLevelButton = () => {
  const { editor } = useEditorStore();
  const headings = [
    { label: "Normal Text", value: 0, fontSize: "16px" },
    { label: "Heading 1", value: 1, fontSize: "32px" },
    { label: "Heading 2", value: 2, fontSize: "24px" },
    { label: "Heading 3", value: 3, fontSize: "20px" },
    { label: "Heading 4", value: 4, fontSize: "18px" },
  ];

  const getCurrentHeading = () => {
    for (let level = 1; level < 5; level++) {
      if (editor?.isActive(`heading-${level}`)) {
        return `Heading ${level}`;
      }
    }
    return "Normal Text";
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <button className="h-7 min-w-7 shrink-0 flex items-center justify-center rounded-sm border border-neutral-200 px-1.5 overflow-hidden text-sm hover:bg-neutral-200/80">
          <span className="truncate">
            {getCurrentHeading()}
          </span>
          <ChevronDownIcon className="ml-2 size-4 shrink-0" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="p-1 flex flex-col gap-y-1">
        {headings.map(({label, value, fontSize}) => (
          <button
            key={value}
            className={cn(
              "flex item-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80",
              (value === 0 && !editor?.isActive("heading")) || editor?.isActive("heading", { level: value }) &&
                "bg-neutral-200/80"
            )}
            onClick={() => {
              if(value === 0) {
                editor?.chain().focus().setParagraph().run()
              } else {
                editor?.chain().focus().toggleHeading({ level: value as Level }).run()
              }
            }}
          >
            <span className="truncate">{label}</span>
          </button>
        ))}
      </DropdownMenuContent>
      </DropdownMenu >
  )
};

const FontFamilyButton = () => {
  const { editor } = useEditorStore();
  const fonts = [
    { label: "Arial", value: "Arial" },
    { label: "Times New Roman", value: "Times New Roman" },
    { label: "Courier New", value: "Courier New" },
    { label: "Comic Sans MS", value: "Comic Sans MS" },
    { label: "Georgia", value: "Georgia" },
    { label: "Helvetica", value: "Helvetica" },
    { label: "Impact", value: "Impact" },
    { label: "Lucida Console", value: "Lucida Console" },
    { label: "Lucida Sans", value: "Lucida Sans" },
    { label: "Trebuchet MS", value: "Trebuchet MS" },
    { label: "Verdana", value: "Verdana" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="h-7 w-[120px] shrink-0 flex items-center justify-between rounded-sm border border-neutral-200 px-1.5 overflow-hidden text-sm hover:bg-neutral-200/80">
          <span className="truncate">
            {editor?.getAttributes("textStyle").fontFamily || "Arial"}
          </span>
          <ChevronDownIcon className="ml-2 size-4 shrink-0" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="p-1 flex flex-col gap-y-1">
        {fonts.map(({ label, value }) => (
          <button
            onClick={() => editor?.chain().focus().setFontFamily(value).run()}
            key={value}
            className={cn(
              "flex item-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80",
              editor?.getAttributes("textStyle").fontFamily === value &&
                "bg-neutral-200/80"
            )}
            style={{ fontFamily: value }}
          >
            <span className="text-sm">{label}</span>
          </button>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

interface ToolbarButtonProps {
  onClick?: () => void;
  isActive?: boolean;
  icon: LucideIcon;
}

const ToolbarButton = ({
  onClick,
  isActive,
  icon: Icon,
}: ToolbarButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80",
        isActive && "bg-neutral-200/80"
      )}
    >
      <Icon className="size-4" />
    </button>
  );
};

export const Toolbar = () => {
  const { editor } = useEditorStore();

  const sections: {
    label: string;
    icon: LucideIcon;
    onClick: () => void;
    isActive?: boolean;
  }[][] = [
    [
      {
        label: "Undo",
        icon: Undo2Icon,
        onClick: () => editor?.chain().focus().undo().run(),
      },
      {
        label: "Redo",
        icon: Redo2Icon,
        onClick: () => editor?.chain().focus().redo().run(),
      },
      {
        label: "Print",
        icon: PrinterIcon,
        onClick: () => window.print(),
      },
      {
        label: "Spell Check",
        icon: SpellCheckIcon,
        onClick: () => {
          const current = editor?.view.dom.getAttribute("spellcheck");
          editor?.view.dom.setAttribute(
            "spellcheck",
            current === "false" ? "true" : "false"
          );
        },
      },
    ],
    [
      {
        label: "Bold",
        icon: BoldIcon,
        onClick: () => editor?.chain().focus().toggleBold().run(),
        isActive: editor?.isActive("bold"),
      },
      {
        label: "Italic",
        icon: ItalicIcon,
        onClick: () => editor?.chain().focus().toggleItalic().run(),
        isActive: editor?.isActive("italic"),
      },
      {
        label: "Underline",
        icon: UnderlineIcon,
        onClick: () => editor?.chain().focus().toggleUnderline().run(),
        isActive: editor?.isActive("underline"),
      },
      {
        label: "Strike",
        icon: StrikethroughIcon,
        onClick: () => editor?.chain().focus().toggleStrike().run(),
        isActive: editor?.isActive("strike"),
      },
    ],
    [
      {
        label: "Comment",
        icon: MessageSquarePlusIcon,
        onClick: () => console.log("TODO:Comment"),
        isActive: false,
      },
      {
        label: "List Todo",
        icon: ListTodoIcon,
        onClick: () => editor?.chain().focus().toggleTaskList().run(),
        isActive: editor?.isActive("taskList"),
      },
      {
        label: "Remove Formatting",
        icon: RemoveFormattingIcon,
        onClick: () => editor?.chain().focus().unsetAllMarks().run(),
      },
    ],
  ];

  return !editor ? (
    <h1 className="text-sm min-h-screen min-w-screen bg-[#f1f4f9] flex items-center justify-center">
      loading
    </h1>
  ) : (
    <div className="bg-[#f1f4f9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto">
      {sections[0].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
      <Separator orientation="vertical" className="mx-2.5 h-6 bg-neutral-500" />
      {/* TODO: Font Family */}

      <FontFamilyButton />

      <Separator orientation="vertical" className="mx-2.5 h-6 bg-neutral-500" />
      {/* TODO: Heading */}

      <HeadingLevelButton/>

      <Separator orientation="vertical" className="mx-2.5 h-6 bg-neutral-500" />
      {/* TODO: Font Size */}
      <Separator orientation="vertical" className="mx-2.5 h-6 bg-neutral-500" />
      {sections[1].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
      {/* TODO: Text Color */}
      <TextColorButton />
      {/* TODO: Highlight Color */}
      <HighlightColorButton/>
      <Separator
        orientation="vertical"
        className="mx-2.5 h-6 bg-neutral-500 w-[.5px]"
      />
      {/* TODO: Link */}
      {/* TODO: Image */}
      {/* TODO: Align */}
      {/* TODO: Line Height */}
      {/* TODO: List */}
      <Separator orientation="vertical" className="mx-2.5 h-6 bg-neutral-500" />
      {sections[2].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
    </div>
  );
};
