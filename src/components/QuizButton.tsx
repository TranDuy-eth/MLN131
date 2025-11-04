import React from 'react'
import { Link } from 'react-router-dom'
import { Brain } from 'lucide-react'
import { motion } from 'framer-motion'

const QuizButton: React.FC = () => {
  return (
    <Link to="/quiz">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="group fixed bottom-6 right-24 z-50 relative"
      >
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Kiểm tra kiến thức
          <div className="absolute left-full top-1/2 -translate-y-1/2 -ml-1 w-2 h-2 bg-gray-900 rotate-45"></div>
        </div>

        {/* Button */}
        <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 rounded-full shadow-2xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110">
          <Brain className="w-8 h-8 text-white" />
        </div>

        {/* Badge */}
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-bold text-gray-900 shadow-lg animate-pulse">
          20
        </div>
      </motion.div>
    </Link>
  )
}

export default QuizButton
