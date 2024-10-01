import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { Recipe } from "../components/UI/Hero/Banner";

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

export type ApiData={
    response:Recipe[],
    loading:boolean,
    setResponse:(data:Recipe[])=>void;
    fetchData:()=>Promise<void>
}

export const useApiData=create(
    devtools<ApiData>((set)=>({
        response:[],
        loading:false,
        setResponse:(data:Recipe[])=>set({response:data}),
        fetchData:async()=>{
            set({loading:true});
            try{
        const res = await fetch('https://dummyjson.com/recipes');
        const data = await res.json();
        set({ response: data.recipes as Recipe[] || [], loading: false });
            }catch(error){
            console.error("Failed to fetch data", error);
        set({ loading: false });
            }
        }
    }))
)