import React, { useEffect } from "react";
import resume from "../../resume.pdf"
import anime from "animejs";
import SocialLinks from "./Social";

export default function Content() {
  useEffect(() => {
    anime({
      targets: `#about .content`,
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
      easing: "easeInOutQuad",
    });
  }, []);

  return (
    <div className="content">
      <p>¡Hola! Soy Haziel, un entusiasta del aprendizaje y la creación continua. Disfruto de desafíos nuevos y de trabajar junto a personas que me inspiran a mejorar constantemente.</p>
      <p>Actualmente, estoy trabajando en Mifiel, donde me desempeño como desarrollador web full stack. En este rol, estoy comprometido con el análisis, desarrollo y soporte de sistemas empresariales, así como con la propuesta de soluciones innovadoras para los desafíos de los clientes.</p>
      <p>Creo firmemente en la importancia de despertar cada día con la oportunidad de hacer lo que más nos apasiona, mientras agregamos valor a nosotros mismos y a quienes nos rodean. Esta filosofía impulsa mi trabajo diario, donde busco contribuir positivamente al equipo y al proyecto en el que estoy involucrado.</p>
      <p>Además, considero crucial ser consciente de que nuestras pasiones pueden evolucionar con el tiempo. Reconozco que lo que nos apasionaba en el pasado puede no ser lo mismo que nos apasiona hoy, ya que las personas cambiamos y evolucionamos. Es por eso que, si bien disfruto lo que hago y me esfuerzo por dar lo mejor de mí cada día, también estoy preparado para aceptar que mis intereses y pasiones pueden cambiar en el futuro. Esta mentalidad me permite adaptarme a nuevas situaciones y desafíos con una mente abierta y una actitud positiva.</p>
      <p>Mi enfoque en el trabajo se basa en encontrar un equilibrio entre disfrutar lo que hago en el presente y estar preparado para cualquier cambio que pueda surgir en el futuro. Esta flexibilidad me permite mantenerme enfocado en dar lo mejor de mí en cada tarea, independientemente de cómo evolucionen mis intereses personales.</p>
      <p>Estoy comprometido con el crecimiento personal y profesional, y estoy emocionado de seguir aprendiendo y evolucionando en mi trayectoria laboral. Siempre estoy abierto a nuevas oportunidades y desafíos que me permitan seguir creciendo y contribuyendo de manera significativa al equipo y al proyecto en el que estoy involucrado.</p>
      <p>¡Gracias por visitar mi perfil y compartir este viaje conmigo! Si deseas saber más sobre mi trabajo o explorar oportunidades de colaboración, no dudes en ponerte en contacto.</p>
      
      <div className="d-flex flex-wrap align-items-center justify-content-between">
        <a
          rel="noopener noreferrer"
          href={resume}
          target="_blank"
          className="btn mt-2"
        >
          Descargar CV
        </a>
        <SocialLinks />
      </div>
    </div>
  );
}
