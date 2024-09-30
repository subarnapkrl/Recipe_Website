import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type HomePageStore={
    openModal:boolean;
    toggleModal:()=>void;
}

export const useHomePageStore=create(
    devtools<HomePageStore>((set)=>({
        openModal:false,
        toggleModal:()=>set((state)=>({openModal:!state.openModal}))
    }))
)