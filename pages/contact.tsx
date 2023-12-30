import { ButtonFill } from "@/components/ButtonFill";
import InputPop from "@/components/InputPop";
import Layout from "@/components/Layout"
import TextareaPop from "@/components/TextareaPop";
import Image from 'next/image';
import { ReactEventHandler } from "react";
const  ContactPage = ()=>{

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
    }
    return(
        <Layout>
            <div className="py-12">
            <h2 className="text-4xl">Contact Us</h2>
            <i>We always eager to help you!..</i>
            <div className="flex relative flex-col gap-4 my-8 items-center  text-center justify-evenly sm:flex-row">
                <form onSubmit={handleSubmit}>
                <div className="flex  bg-[#89d3c7] rounded-xl p-12 flex-col gap-6">
                  <div className="my-2">
                  <h3 className="text-2xl">Fill the form</h3>
                    <i>We will connect with you as soon as possible!</i>
                  </div>
                    <InputPop typed="email" name="email" placeHolder="Email"  />
                    <InputPop typed="text" name="title" placeHolder="Title"  />
                    <TextareaPop name="description" placeHolder="Write your query here..."></TextareaPop>    
                    <ButtonFill typedValue="submit" value="Submit" widthed={"fit-content"} />
                </div>
                </form>
                <div className="hidden lg:block">
                  
                    <Image src={"/helping.png"} alt="helping image" width={"500"} height={"500"}></Image>
                </div>
            </div>
            </div>
        </Layout>
    )
}
export default ContactPage