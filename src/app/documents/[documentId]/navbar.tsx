"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { DocumentInput } from "./document-input";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  BoldIcon,
  FileIcon,
  FileJsonIcon,
  FilePenIcon,
  FilePlusIcon,
  FileTextIcon,
  GlobeIcon,
  ItalicIcon,
  PrinterIcon,
  Redo2Icon,
  RemoveFormattingIcon,
  StrikethroughIcon,
  Table2Icon,
  TextIcon,
  TrashIcon,
  UnderlineIcon,
  Undo2Icon,
} from "lucide-react";
import { BsFilePdf } from "react-icons/bs";
import { useEditorStore } from "@/store/use-editor-store";

export const Navbar = () => {

  const {editor} = useEditorStore();
  const [isTableModalOpen, setTableModalOpen] = useState(false);
  const [rows, setRows] = useState(1);
  const [cols, setCols] = useState(1);

  const insertTable = ({rows, cols}: {rows: number, cols: number}) => {
    editor?.chain().focus().insertTable({ rows, cols, withHeaderRow: false }).run();
    setTableModalOpen(false);
  }

  const onDownload = (blob: Blob, filename: string) => {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  }

  const onSaveJSON = () => {
    if(!editor) return;
    const json = editor.getJSON();
    const blob = new Blob([JSON.stringify(json)], { type: "application/json" });
    onDownload(blob, "document.json");
  }

  const onSaveText = () => {
    if(!editor) return;
    const text = editor.getHTML();
    const blob = new Blob([text], { type: "text/plain" });
    onDownload(blob, "document.txt");
  }

  const onSaveHTML = () => {
    if(!editor) return;
    const html = editor.getHTML();
    const blob = new Blob([html], { type: "text/html" });
    onDownload(blob, "document.html");
  }

  return (
    <nav className="flex items-center justify-between ">
      <Dialog open={isTableModalOpen} onOpenChange={setTableModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create a Custom Table</DialogTitle>
          </DialogHeader>
          <div className="flex gap-4">
            <div>
              <label htmlFor="rows" className="block mb-2 text-sm font-medium">Rows:</label>
              <Input
                id="rows"
                type="number"
                value={rows}
                min={1}
                onChange={(e) => setRows(Number(e.target.value))}
              />
            </div>
            <div>
              <label htmlFor="cols" className="block mb-2 text-sm font-medium">Columns:</label>
              <Input
                id="cols"
                type="number"
                value={cols}
                min={1}
                onChange={(e) => setCols(Number(e.target.value))}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setTableModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => insertTable({ rows, cols })}>
              Insert Table
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <div className="flex items-center gap-2">
        <Link href="/">
          <Image src="/logo.svg" alt="Cloud Quill" width={40} height={40} />
        </Link>
        <div className="flex flex-col">
          {/* Document Input */}
          <DocumentInput />
          {/* MenuBar */}
          <div className="flex">
            <Menubar className="border-none bg-transparent shadow-none h-auto p-0">
              <MenubarMenu>
                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                  File
                </MenubarTrigger>
                <MenubarContent className="print:hidden">
                  <MenubarSub>
                    <MenubarSubTrigger>
                      <FileIcon className="mr-2 size-4" />
                      Save
                    </MenubarSubTrigger>

                    <MenubarSubContent>
                      <MenubarItem onClick={onSaveJSON}>
                        <FileJsonIcon className="mr-2 size-4" />
                        JSON
                      </MenubarItem>
                      <MenubarItem onClick={onSaveHTML}>
                        <GlobeIcon className="mr-2 size-4" />
                        HTML
                      </MenubarItem>
                      <MenubarItem onClick={()=> window.print()}>
                        <BsFilePdf className="mr-2 size-4" />
                        PDF
                      </MenubarItem>
                      <MenubarItem onClick={onSaveText}>
                        <FileTextIcon className="mr-2 size-4" />
                        Text
                      </MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarSeparator />
                  <MenubarItem>
                    <FilePlusIcon className="mr-2 size-4" />
                    New Document
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <FilePenIcon className="mr-2 size-4" />
                    Rename
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <TrashIcon className="mr-2 size-4" />
                    Remove
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem onClick={() => window.print()}>
                    <PrinterIcon className="mr-2 size-4" />
                    Print <MenubarShortcut>Ctrl+P</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                  Edit
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarItem onClick={() => editor?.chain().focus().undo().run()}>
                    <Undo2Icon className="mr-2 size-4" />
                    Undo <MenubarShortcut>Ctrl+Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem onClick={() => editor?.chain().focus().redo().run()}>
                    <Redo2Icon className="mr-2 size-4" />
                    Redo <MenubarShortcut>Ctrl+Y</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                  Insert
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarSub>
                    <MenubarSubTrigger>
                      <Table2Icon className="mr-2 size-4" />
                      Insert Table
                    </MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem onClick={() => insertTable({rows: 1, cols: 1})}>1 x 1</MenubarItem>
                      <MenubarItem onClick={() => insertTable({rows: 2, cols: 2})}>2 x 2</MenubarItem>
                      <MenubarItem onClick={() => insertTable({rows: 3, cols: 3})}>3 x 3</MenubarItem>
                      <MenubarItem onClick={() => insertTable({rows: 4, cols: 4})}>4 x 4</MenubarItem>
                      <MenubarItem onClick={() => setTableModalOpen(true)}>Custom Size</MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                  Format
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarSub>
                    <MenubarSubTrigger>
                      <TextIcon className="mr-2 size-4" />
                      Text Style
                    </MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem onClick={() => editor?.chain().focus().toggleBold().run()}>
                        <BoldIcon className="mr-2 size-4" />
                        Bold <MenubarShortcut>Ctrl+B</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem onClick={() => editor?.chain().focus().toggleItalic().run()}>
                        <ItalicIcon className="mr-2 size-4" />
                        Italic <MenubarShortcut>Ctrl+I</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem onClick={() => editor?.chain().focus().toggleUnderline().run()}>
                        <UnderlineIcon className="mr-2 size-4" />
                        Underline<MenubarShortcut>Ctrl+U</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem onClick={() => editor?.chain().focus().toggleStrike().run()}>
                        <StrikethroughIcon className="mr-2 size-4" />
                        Strikethrough &nbsp;<MenubarShortcut>Alt+K</MenubarShortcut>
                      </MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarSeparator />
                  <MenubarItem onClick={() => editor?.chain().focus().unsetAllMarks().run()}>
                    <RemoveFormattingIcon className="mr-2 size-4" />
                    Clear Formatting
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </div>
      </div>
    </nav>
  );
};
