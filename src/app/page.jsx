import Image from "next/image";
import logo from "@/assets/logo.png";
import { Container } from "@/fragments/container/Container";
import Link from "next/link";

export default function Home() {
  return (
    <div className="devPage">
      <Container>
        <div className="box">
          <figure>
            <Image src={logo} alt="Logo LehDecore"/>
          </figure>
          <h1>OPS :( Estamos em desenvolvimento</h1>
          <p>Nosso site já está quase pronto, mas por enquanto entre em contato com o nosso whatsApp</p>
          <Link href={"whatsapp://send?phone=5522998502155&text=Ol%C3%A1%20LehDecore%20!"}>
            <span>Fale Conosco!!</span>
          </Link>
        </div>
      </Container>
      {/* <Header/> */}
    </div>
   );
}
