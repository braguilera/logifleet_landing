import './App.css'
import bg from './assets/logifleet_bg.webp'
import mockup_pc from './assets/logifleet_mockup_pc.webp'
import mockup_mobile from './assets/logifleet_mockup_mobile.webp'
import quadrant_logo from './assets/quadrant_logo.svg'
import logifleet_logo from './assets/logifleet_logo.webp'

import Feature from './components/Feature'


function App() {

  const features = [
    {
      title: 'Monitoreo en tiempo real',
      description: 'Seguimiento en vivo de inventarios y movimientos dentro del almacén.'
    },
    {
      title: 'Optimización de espacio',
      description: 'Herramientas para maximizar el uso del espacio disponible.'
    },
    {
      title: 'Reportes personalizados',
      description: 'Generación de informes detallados según las necesidades del usuario.'
    },
  ]

  return (
    <>
      <section
        className='overflow-hidden flex flex-row h-screen items-center justify-center px-8 py-10'
      >
      <img
        src={bg}
        className='absolute -z-10 w-full overflow-hidden top-0 left-0 object-cover h-full'
      />
        <article
          className='flex flex-col gap-2'
        >
          <img
            src={logifleet_logo}
            className='h-5 w-fit opacity-40'
            alt="Logifleet Logo"
          />
          <h1
            className='text-6xl font-bold text-zinc-600'
          >
            Gestión integral de 
            <span className='text-primary pl-4'>
              almacenes
            </span>
          </h1>
          <p
            className='text-zinc-500'
          >
            Visibilidad completa de tu operación con reportes en tiempo real. Identificá cuellos de botella y optimizá recursos al instante.
          </p>
          <article
            className='flex flex-col gap-4'
          >
            <h2
              className='font-semibold text-zinc-600'
            >
              Que ofrece Logifleet
            </h2>
            {features.map((feature, index) => (
                <Feature title={feature.title} description={feature.description} index={index} />
            ))}
          </article>
          <footer
            className='flex flex-col gap-2 py-4'
          >
            <button
              className='bg-primary text-white px-4 py-2 rounded-md text-2xl font-semibold'
            >
              Iniciar sesión
            </button>
            <button
              className='text-zinc-300 text-sm'
            >
              Ir a Quadrant
            </button>
          </footer>
        </article>
        <aside
          className='relative px-20'
        >
          <img
            src={mockup_pc}
            className='mockup_pc'
            alt="Logifleet en PC"
          />
          <img
            src={mockup_mobile}
            className='absolute bottom-0 right-0 h-3/4'
            alt="Logifleet en móvil"
          />
        </aside>
        <footer
          className='absolute bottom-0 h-10 items-center justify-center left-1/2 z-20 px-4 py-2 text-zinc-400 text-xs flex flex-row'
        >
          <p
            className=''
          >
            Powered By
          </p>
          <a
            href="https://www.quadrant.com.ar/" target="_blank" rel="noopener noreferrer"
            className='flex flex-row items-center'
          >
            <img
              src={quadrant_logo}
              className='h-5 ml-1'
              alt="Logo de Quadrant"
            />
          </a>
        </footer>
      </section>
    </>
  )
}

export default App
