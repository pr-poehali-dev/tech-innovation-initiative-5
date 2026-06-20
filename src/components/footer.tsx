import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-orbitron text-2xl font-bold text-white mb-4">
              TIV<span className="text-red-500">.Intercept</span>
            </h2>
            <p className="font-space-mono text-gray-300 mb-6 max-w-md">
              Образовательный проект о перехвате торнадо: легендарные машины TIV 1 и TIV 2, наука об охоте за штормами и
              культура storm-chasing.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Разделы */}
          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Разделы</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Машины TIV
                </a>
              </li>
              <li>
                <a
                  href="#applications"
                  className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Реальные миссии
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Вопросы
                </a>
              </li>
            </ul>
          </div>

          {/* Ресурсы */}
          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Ресурсы</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.noaa.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  NOAA
                </a>
              </li>
              <li>
                <a
                  href="https://www.spc.noaa.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Storm Prediction Center
                </a>
              </li>
              <li>
                <a
                  href="https://www.weather.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  National Weather Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-red-500/20">
          <div className="flex flex-col gap-4">
            <p className="font-space-mono text-red-400/80 text-sm text-center md:text-left">
              ⚠ Вся информация носит образовательный характер. Не пытайтесь повторить перехват без специальной
              подготовки.
            </p>
            <p className="font-space-mono text-gray-400 text-sm text-center md:text-left">
              © 2026 TIV.Intercept — образовательный фан-проект. Не аффилирован с реальными командами охотников.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}