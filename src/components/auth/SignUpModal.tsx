'use client'

import { SignUp } from "@clerk/nextjs"
import { dark } from "@clerk/themes"
import { X } from "lucide-react"
import Image from 'next/image'

interface SignUpModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SignUpModal({ isOpen, onClose }: SignUpModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="modal-content flex flex-row bg-zinc-900 rounded-lg overflow-hidden max-w-4xl w-full">
        <div className="w-1/2 hidden md:flex justify-center items-center bg-black">
          <Image
            src="/img/nikola-tesla.png"
            className="w-full h-full object-cover rounded-md"
            alt="Nikola Tesla"
            width={384}
            height={494}
          />
        </div>
        <div className="w-full md:w-1/2 p-6 flex flex-col items-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
          >
            <X className="h-6 w-6" />
          </button>
          <SignUp
            routing="hash"
            appearance={{
              baseTheme: dark,
              elements: {
                card: "bg-transparent shadow-none w-full",
                headerTitle: "text-2xl font-bold mb-4 text-white",
                headerSubtitle: "text-gray-300 mb-4",
                formFieldLabel: "text-gray-300 text-sm font-bold",
                formFieldInput: "w-full px-3 py-2 bg-zinc-700 text-white rounded",
                formButtonPrimary: "bg-rose-500 text-white px-4 py-2 rounded w-full mb-4 hover:bg-rose-600",
                dividerLine: "bg-gray-600",
                dividerText: "text-white",
                formFieldInputShowPasswordButton: "text-gray-300",
                footerActionLink: "text-rose-500 hover:text-rose-400",
                socialButtonsBlockButton: "bg-zinc-700 text-white hover:bg-zinc-600",
                socialButtonsBlockButtonArrow: "text-white",
                socialButtonsBlockButtonText: "text-white",
                formFieldInputError: "text-red-500 text-sm",
              },
              layout: {
                socialButtonsVariant: "blockButton",
                socialButtonsPlacement: "bottom",
              },
            }}
          />
        </div>
      </div>
    </div>
  )
}
