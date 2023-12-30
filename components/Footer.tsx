import Link from "next/link";
import { ButtonFill } from "./ButtonFill";
import InputPop from "./InputPop";
import Image from "next/image";

function Footer(){
    const handleSubmit  = (e:React.FormEvent<HTMLFormElement> )=>{
        e.preventDefault()
        console.log(e.target);
    }
    return (
        <div className="flex mt-12 mb-20 flex-col gap-12 justify-between sm:flex-row" >
            <div>
                <h2 className="text-2xl">Flash Deals</h2>
                <p className="mt-2 italic">Amazing loot deals!</p>
                <div className="my-4">
                    <Link href={"https://t.me/FlashDealsFinder"} target="_black">
                    <Image src={"/telegram.png"} alt="telegram" width={40} height={40} />
                    </Link>
                </div>
            </div>
            <div >
                <h3 className=" text-2xl">Links</h3>
                <div className="flex flex-col gap-4 mt-4">
                <Link href={"/"} >Home</Link>
                <Link href={"/"} >Trending</Link>
                <Link href={"/about"} >About</Link>
                <Link href={"/contact"} >Contact</Link>
                </div>
            </div>
            <div>
                <h3 className="text-2xl">Newsletter</h3>
                <form onSubmit={handleSubmit}>
                <div className="mt-4 flex flex-col items-start">
                <InputPop typed={'email'} name="email" placeHolder={"your@mail.com"} />
                <br />
                <ButtonFill value="Subscribe" typedValue={"submit"}></ButtonFill>
                </div>
                </form>
            </div>
        </div>
    )
}
export default Footer;