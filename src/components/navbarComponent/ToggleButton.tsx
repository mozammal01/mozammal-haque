import { motion } from "framer-motion";

export default function AnimatedToggle({ open, setOpen }: { open: boolean, setOpen: (open: boolean) => void }) {
  // const [open, setOpen] = useState(false);

  return (
    <button onClick={() => setOpen(!open)} className="relative w-10 h-10">
      <motion.span
        animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
        className="block w-8 h-[2px] bg-black dark:bg-white absolute left-1 top-2 origin-center"
      />
      <motion.span
        animate={open ? { opacity: 0 } : { opacity: 1 }}
        className="block w-8 h-[2px] bg-black dark:bg-white absolute left-1 top-4"
      />
      <motion.span
        animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
        className="block w-8 h-[2px] bg-black dark:bg-white absolute left-1 top-6 origin-center"
      />
    </button>
  );
}
