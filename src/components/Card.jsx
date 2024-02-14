import { data } from "autoprefixer";
import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={1}
      dragTransition={{ bounceStiffness: 400, bounceDamping: 7 }}
      className="relative flex-shrink-0 w-48 h-64 rounded-[45px] bg-zinc-900/90 text-white px-4 py-7 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-6 font-semibold">{data.desc}</p>

      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between px-4 mb-4">
          <h5>{data.filesize} </h5>
          <span className="w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? <IoCloseOutline /> : <MdDownload color="white" />}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full min-h-7 ${
              data.tag.tagColor == "blue" ? "bg-blue-500" : "bg-green-500"
            } flex items-center justify-center`}
          >
            <h3 className="text-xs font font-semibold">{data.tag.tagTitle} </h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
