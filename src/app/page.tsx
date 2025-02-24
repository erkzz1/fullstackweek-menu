import Link from "next/link";

import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div className="justify-items-center">
      <h1>Bem vindo! Selecione o restaurante!</h1>
      <Link href="/fsw-donalds">
        <Button><p>Ir para o restaurante Donalds</p></Button>
      </Link>
    </div>
  );
};

export default HomePage;
