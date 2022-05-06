import { useState } from "react";
import { CloseButton } from "../CloseButton";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep"

import bugImageUrl from "../../assets/bug.svg"
import ideaImageUrl from "../../assets/idea.svg"
import thoughtImageUrl from "../../assets/thought.svg"
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
    BUG: {
        title: "Problema",
        image: {
            source: bugImageUrl,
            alt: "Imagem de um inseto"
        }
    },
    IDEA: {
        title: "Ideia",
        image: {
            source: ideaImageUrl,
            alt: "Imagem de uma lampada"
        }
    },
    OTHER: {
        title: "Outro",
        image: {
            source: thoughtImageUrl,
            alt: "Imagem de um balão de pensamento"
        }
    }
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
    const [ feedbackType, setFeedBackType ] = useState<FeedbackType | null>(null)
    const [ feedbackSent, setFeedbackSent] = useState(false)

    function handleRestartFeedBack() {
        setFeedbackSent(false)
        setFeedBackType(null)
    }
    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4  flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
           { feedbackSent ? (
               <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedBack} />
           ): (
               <>
                {!feedbackType ? (
               <FeedbackTypeStep onFeedbackTypeChanged={setFeedBackType} />
           ) : (
               <FeedbackContentStep 
               feedbackType={ feedbackType } 
               onFeedbackRestartRequested={ handleRestartFeedBack }
               onFeedbackSent={() => setFeedbackSent(true) }
               />
           )}
               </>
           )}

            <footer className="text-xs text-center text-neutral-400">
                Feito com ❤️ por <a className="underline underline-offset-2" href="https://github.com/JefferMarcelino" target="_blank">Jeffer</a>
            </footer>
        </div>
    )
}