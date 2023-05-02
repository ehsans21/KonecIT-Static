import image from "../images/background.jpg";
import Hero from "../components/Hero";

export default function Home() {
    return (
        <div className="home">
        <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1675510183229-c50371163c19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
         />
        </div>
    );
}