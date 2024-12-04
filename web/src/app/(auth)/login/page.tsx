import Image from 'next/image'
import { LoginForm } from './_components/login-form'
import * as Svg from './svgs'

export default function Page() {
  return (
    <main className="flex h-full items-center justify-center">
      <div className="h-full flex-1 bg-[linear-gradient(323.43deg,#0B1551_0%,#070E36_91.69%)] hidden md:block">
        <div className="relative flex h-full items-center justify-center">
          <div className="absolute left-12 top-12 h-[60px] w-[50px]">
            <Image
              className="brightness-0 invert"
              src="/logo-bankme.png"
              fill
              alt="Bankme"
            />
          </div>
          <Svg.Dots className="absolute -right-20 top-[17px]" />
          <Svg.Dots className="absolute -left-[136px] bottom-[27px]" />
          <div className="absolute -right-[240px] top-10 h-[347px] w-[539px] bg-[radial-gradient(42.23%_42.23%_at_50%_50%,_rgba(73,107,195,0.08)_0%,_rgba(8,16,62,0.08)_100%)]" />
          <div className="absolute -left-[300px] bottom-10 h-[347px] w-[539px] bg-[radial-gradient(42.23%_42.23%_at_50%_50%,_rgba(73,107,195,0.08)_0%,_rgba(8,16,62,0.08)_100%)]" />
          <div className="absolute -left-[187px] -top-20 h-[347px] w-[539px] bg-[radial-gradient(42.23%_42.23%_at_50%_50%,_rgba(73,107,195,0.08)_0%,_rgba(8,16,62,0.08)_100%)]" />

          <div className="relative mb-8 text-center">
            <div className="absolute -left-[62px] -top-[73px] h-[347px] w-[539px] bg-[radial-gradient(42.23%_42.23%_at_50%_50%,_rgba(73,107,195,0.05)_0%,_rgba(8,16,62,0.05)_100%)]" />

            <div className="mb-8">
              <Image
                src="/notebook.webp"
                width={371}
                height={326}
                unoptimized
                alt="Notebook"
              />
            </div>

            <h2 className="mb-6 text-xl/tight text-white">
              Temos o plano perfeito para você
            </h2>
            <h3 className="max-w-[400px] text-balance font-light text-[#CCE1FF]">
              Mais rentabilidade, agilidade e acesso a capital para você crescer, a taxas
              nunca vistas antes.
            </h3>
          </div>
        </div>
      </div>

      <div className="relative flex h-full w-[576px] flex-col items-center justify-center border-l border-[#F2F2F2] bg-white shadow-[0_4px_15px_rgba(0,0,0,0.6)]">
        <div className="absolute top-16 h-[60px] w-[50px]">
          <Image src="/logo-bankme.png" fill alt="Bankme" />
        </div>

        <LoginForm />

        <span className="absolute bottom-10 block text-[13px]/[20px] tracking-[-0.2px] text-[#A6A6A6]">
          © 2024 Bankme <span className="text-[#BFBFBF]">•</span> Todos os direitos
          reservados
        </span>
      </div>
    </main>
  )
}
