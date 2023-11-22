import { FC, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import uuid from "react-uuid";

interface IAlerts {
  text?: string;
  width?: string;
  uuid: string;
}

const Alert: FC = () => {
  const [alerts, setAlerts] = useState<IAlerts[]>([]);

  const handleAnimationComplete = (uuid: string) => {
    // Remove the alert after animation completes
    setTimeout(() => {
      setAlerts((prevAlerts) => prevAlerts.filter((alert) => alert.uuid !== uuid));
    }, 0);
  };

  const addAlert = () => {
    setAlerts((prevAlerts) => [
      ...prevAlerts,
      { text: "Mesagem de ALERTA em stack de teste.", uuid: uuid() },
    ]);
  };

  return (
    <>
      <div className="absolute right-0 z-50">
      {alerts.map((alert) => (
          <motion.div initial={{right: -300}} animate={{right: 0}} transition={{duration: 0.5}} className="p-1 relative" key={alert.uuid}>
            <div className={clsx("flex flex-col bg-gray-300/80 overflow-hidden rounded-lg shadow-2xl")}>
              <p className="text-black p-2">
                {alert.text}
              </p>
              <motion.div
                initial={{ width: "100%", opacity:"100%" }}
                animate={{ width: 1 }}
                transition={{ duration: 10 }}
                exit={{opacity: 0}}
                onAnimationComplete={() => {
                  handleAnimationComplete(alert.uuid);
                }}
              >
                <div className="relative h-1 rounded-full bg-green-500"></div>
              </motion.div>
            </div>
          </motion.div>
      ))}
      </div>
      <button onClick={addAlert}>ADD DEBUG ALERT</button>
    </>
  );
};

export default Alert;