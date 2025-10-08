import BookPage from "../BookPage";
import portadaImg from "@assets/generated_images/Portada_ardilla_feliz_con_bellotas_7680e08e.png";

export default function BookPageExample() {
  return (
    <div className="w-full h-screen p-4">
      <BookPage
        title="La Ardillita Glotona"
        text="Había una vez, una ardillita que vivía en el bosque y era muy glotona."
        imageSrc={portadaImg}
        imageAlt="Ardilla feliz con bellotas"
        pageNumber={1}
        totalPages={8}
      />
    </div>
  );
}
