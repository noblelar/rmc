import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Welcome from "@/components/welcome/Welcome";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <Header/>
      <Welcome/>
      <Footer/>

    </main>
  )
}
