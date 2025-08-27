import LoginForm from "@/components/Form/LoginForm";
import { isologoform } from "@/public";
import Image from "next/image";


export default function Login(){
    return(
        <main className="mt-16 pt-20">
            
            <section className="w-72 h-11 mx-auto opacity-75">
            <Image
            src={isologoform}
            alt="Logo Cooperativa Telefónica"
            priority
            />
            </section>
            <section className="py-8 px-4 flex- flex-col space-y-8"> 
                <div className="space-y-4 text-center">
                <h1 className="font-bold text-2xl pt-4">Iniciar sesión</h1>
                <p className="text-[#232527] text-base leading-5 ">Accedé al panel para adminsitradores <br/>
                    con tu usuario y contraseña
                </p></div>
                <div >
                    <LoginForm email={""} password={""}></LoginForm>
                </div>
            </section>
        </main>
    )
}