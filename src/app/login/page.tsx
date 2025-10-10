import LoginForm from "@/components/Form/LoginForm";
import { isologoform, LoginDesktop } from "@/public";
import Image from "next/image";

export default function Login() {
    return (
        <main className="mt-16 lg:mt-0 lg:pt-0 pt-20 min-h-screen lg:grid lg:grid-cols-2">
            <section className="hidden lg:flex flex-col justify-center items-start px-24 text-white bg-[linear-gradient(68deg,#5540A7_0.17%,#7A58FF_81.17%)]">
                <Image
                    src={LoginDesktop}
                    alt="Logo Cooperativa Telefónica"
                    priority
                    className="mb-8 w-40"
                />
                <h1 className="text-5xl font-bold mb-4">Iniciar sesión</h1>
                <p className="text-lg leading-relaxed">
                    Accedé al panel exclusivo para administradores <br />
                    con tu usuario y contraseña.
                </p>
            </section>
            <section className="w-72 h-11 mx-auto opacity-75 lg:hidden ">
                <Image
                    src={isologoform}
                    alt="Logo Cooperativa Telefónica"
                    priority
                />
            </section>
            <section className="flex flex-col justify-center px-8 lg:px-24 py-12 bg-[#f4f4fb] -mt-5">
                {/* <section className="py-8 px-4 flex- flex-col space-y-8 "></section> */}
                <div className="space-y-4 text-center lg:hidden">
                    <h1 className="font-bold text-2xl pt-4 ">Iniciar sesión</h1>
                    <p className="text-[#232527] text-base leading-5 ">Accedé al panel para adminsitradores <br />
                        con tu usuario y contraseña
                    </p>
                </div>
                <div >
                    <LoginForm email={""} password={""}></LoginForm>
                </div>
            </section>
        </main>
    )
}