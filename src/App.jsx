import './App.css'
import bg from './assets/logifleet_bg.webp'
import mockup_pc from './assets/logifleet_mockup_pc.webp'
import mockup_mobile from './assets/logifleet_mockup_mobile.webp'
import quadrant_logo from './assets/quadrant_logo.svg'
import logifleet_logo from './assets/logifleet_logo.webp'
import Feature from './components/Feature';
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2, 
      staggerChildren: 0.1, 
    },
  },
};

const mockupContainerVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const pcMockupVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      type: "spring",
      stiffness: 80,
      damping: 15
    }
  },
};

const mobileMockupVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring",
      stiffness: 80,
      damping: 15
    }
  },
};


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
        <motion.article
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className='flex flex-col gap-2'
        >
          <motion.img
            src={logifleet_logo}
            variants={itemVariants}
            className='h-5 w-fit'
            alt="Logifleet Logo"
          />
          <motion.h1
            variants={itemVariants}
            className='text-6xl font-bold text-zinc-600'
          >
            Gestión integral de 
            <span className='text-primary pl-4'>
              almacenes
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className='text-zinc-500'
          >
            Visibilidad completa de tu operación con reportes en tiempo real. Identificá cuellos de botella y optimizá recursos al instante.
          </motion.p>
          <motion.article
            variants={containerVariants}
            className='flex flex-col gap-4'
          >
            <motion.h2
              variants={itemVariants}
              className='font-semibold text-zinc-600'
            >
              Que ofrece Logifleet
            </motion.h2>
            {features.map((feature, index) => (
              <Feature key={index} title={feature.title} description={feature.description} index={index} />
            ))}
          </motion.article>
<motion.footer
            variants={itemVariants}
            className='flex flex-col gap-2 py-4 w-full items-center'
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='relative w-full rounded-md p-[4px] animate-shine'
              style={{
                backgroundImage: 'linear-gradient(90deg, rgba(50, 179, 156, 0.3) 0%, rgba(50, 179, 156, 0.3) 30%, rgba(255, 255, 255, 0.9) 50%, rgba(50, 179, 156, 0.3) 70%, rgba(50, 179, 156, 0.3) 100%)',
                backgroundSize: '200% 100%',
              }}
            >
              <a
                className='block bg-primary text-white px-4 py-2 w-full text-center rounded-md text-2xl font-semibold'
                href="#" target="_blank" rel="noopener noreferrer"
              >
                Iniciar sesión
              </a>
            </motion.div>
            <a
              className='text-zinc-300 text-sm'
              href="https://www.quadrant.com.ar/" target="_blank" rel="noopener noreferrer"
            >
              Ir a Quadrant
            </a>
          </motion.footer>
        </motion.article>
        <motion.aside
          variants={mockupContainerVariants}
          initial="hidden"
          animate="visible"
          className='relative px-20'
        >
          <motion.img
            variants={pcMockupVariants}
            src={mockup_pc}
            alt="Logifleet en PC"
          />
          <motion.img
            variants={mobileMockupVariants}
            src={mockup_mobile}
            className='absolute bottom-0 right-0 h-3/4'
            alt="Logifleet en móvil"
          />
        </motion.aside>
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1.5, duration: 0.8 } }}
          className='absolute bottom-0 h-10 items-center justify-center left-1/2 z-20 px-4 py-2 text-zinc-400 text-xs flex flex-row'
        >
          <p
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
        </motion.footer>
      </section>
    </>
  )
}

export default App