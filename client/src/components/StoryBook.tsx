import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookPage from "./BookPage";

import portadaImg from "@assets/generated_images/Portada_ardilla_feliz_con_bellotas_7680e08e.png";
import robandoImg from "@assets/generated_images/Ardilla_robando_comida_en_árbol_ada58d66.png";
import construyendoImg from "@assets/generated_images/Animales_construyendo_casita_del_bosque_89ea1484.png";
import casitaComidaImg from "@assets/generated_images/Casita_llena_de_comida_deliciosa_06b3877b.png";
import comiendoImg from "@assets/generated_images/Ardilla_comiendo_dentro_de_casa_4b5a6ae3.png";
import atascadaImg from "@assets/Generated Image October 07, 2025 - 9_29PM_1759883364215.png";
import leccionImg from "@assets/generated_images/Ardilla_aprendiendo_lección_con_amigos_04ebcb31.png";
import compartiendoImg from "@assets/generated_images/Ardilla_compartiendo_con_amigos_felices_031cec17.png";

interface Page {
  title?: string;
  text: string;
  imageSrc: string;
  imageAlt: string;
}

const storyPages: Page[] = [
  {
    title: "La Ardillita Glotona",
    text: "Un cuento sobre compartir y aprender",
    imageSrc: portadaImg,
    imageAlt: "Portada del cuento",
  },
  {
    text: "Había una vez, una ardillita que vivía en el bosque y era muy glotona. Todos los días la ardillita iba y le robaba la comida a todos sus amigos del bosque.",
    imageSrc: robandoImg,
    imageAlt: "Ardilla robando comida en el árbol",
  },
  {
    text: "Los animalitos le quisieron dar una lección para que la ardillita no les comiera más su comida. Se les ocurrió hacerle una casa bien chiquitita, con ventanas y puertas chiquititas.",
    imageSrc: construyendoImg,
    imageAlt: "Animales construyendo casita",
  },
  {
    text: "Y adentro de la casa le dejaron nueces, chocolates, miel, dulces, tortas y helados.",
    imageSrc: casitaComidaImg,
    imageAlt: "Casita llena de comida",
  },
  {
    text: "La ardillita estaba tan contenta, que entró a su casa y se comió toda la comida, y se puso gorda, gorda.",
    imageSrc: comiendoImg,
    imageAlt: "Ardilla comiendo en la casa",
  },
  {
    text: "Entonces, vinieron sus amiguitos para invitarla a jugar, y como ella estaba tan gorda no pudo salir ni por la puerta ni por las ventanas, porque éstas eran muy pequeñas.",
    imageSrc: atascadaImg,
    imageAlt: "Ardilla gorda atascada",
  },
  {
    text: "Entonces la pobre ardillita, como no pudo salir de su casa, se puso muy triste porque no podía ir a jugar con sus amiguitos, sólo podía mirarlos por la ventana.",
    imageSrc: leccionImg,
    imageAlt: "Ardilla aprendiendo lección",
  },
  {
    text: "Entonces, prometió que nunca más iba a comer tanto, y que nunca más les iba a quitar la comida porque así ella podía salir de su casa y jugar con ellos. FIN",
    imageSrc: compartiendoImg,
    imageAlt: "Ardilla compartiendo con amigos",
  },
];

export default function StoryBook() {
  const [currentPage, setCurrentPage] = useState(0);

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < storyPages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const currentStoryPage = storyPages[currentPage];

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center p-4 md:p-8 gap-6">
      <div className="relative w-full max-w-6xl flex-1 max-h-[80vh]">
        <BookPage
          title={currentStoryPage.title}
          text={currentStoryPage.text}
          imageSrc={currentStoryPage.imageSrc}
          imageAlt={currentStoryPage.imageAlt}
          pageNumber={currentPage + 1}
          totalPages={storyPages.length}
        />
      </div>

      <div className="w-full max-w-6xl flex gap-4 px-4">
        <Button
          variant="default"
          className="flex-1 h-16 text-lg font-bold rounded-full shadow-lg hover:scale-105 transition-transform"
          onClick={goToPreviousPage}
          disabled={currentPage === 0}
          data-testid="button-previous-page"
        >
          <ChevronLeft className="w-6 h-6 mr-2" />
          Anterior
        </Button>

        <Button
          variant="default"
          className="flex-1 h-16 text-lg font-bold rounded-full shadow-lg hover:scale-105 transition-transform"
          onClick={goToNextPage}
          disabled={currentPage === storyPages.length - 1}
          data-testid="button-next-page"
        >
          Siguiente
          <ChevronRight className="w-6 h-6 ml-2" />
        </Button>
      </div>
    </div>
  );
}
