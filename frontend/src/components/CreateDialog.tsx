"use client";

import { useState } from "react";
import { Dialog } from "./Dialog";
import Image from "next/image";

import { useForm } from "@tanstack/react-form";

export function CreateDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const form = useForm({
    defaultValues: {
      name: "",
      height: "",
      mass: "",
      hairColour: "",
      skinColour: "",
      eyeColour: "",
      gender: "",
    },
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value);
    },
  });

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        className="flex items-center gap-2 p-2 rounded-full bg-pink-100 hover:bg-pink-200 dark:bg-pink-900 dark:hover:bg-pink-800 transition-colors disabled:opacity-50"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src="/plus.svg"
          alt="Create"
          width={16}
          height={16}
          className="text-pink-600"
        />
      </button>
      <Dialog title="Create Character" isOpen={isOpen} onClose={handleClose}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <div></div>
        </form>
      </Dialog>
    </>
  );
}
