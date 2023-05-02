import React from "react";
import { Aside } from "../../Componentes/Aside";
import { Navbar } from "../../Componentes/NavBar";

function AgregarPretacion() {
  return (
    <div className="flex">
      <Aside />
      <div className="w-full">
        <Navbar />
        <div className="ml-20 mt-14">
          <div className="w-full mx-auto mt-4 max-w-lg text-center ">
            <h1 className="text-3xl  sm:text-4xl text-black">
              CALCULO DE PRESTACIONES
            </h1>
          </div>
          <div className="mt-8 mx-4 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="md:col-span-2 lg:col-span-2">
              <div className="h-full py-6 px-6 rounded-xl border border-gray-200 bg-white">
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                    <label
                          for="first_name"
                          class="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Departamento
                        </label>
                  <select
                    id="default"
                    class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  >
                    <option selected>Departamento</option>
                    <option value="US">Ventas</option>
                    <option value="CA">Contabilidad</option>
                    <option value="FR">Gerencia</option>
                    <option value="DE">Produccion</option>
                  </select>
                    </div>
                    <div>
                    <label
                          for="first_name"
                          class="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Empleado
                        </label>
                  <select
                    id="default"
                    class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  >
                    <option selected>Empleado</option>
                    <option value="US">Luis Ramirez</option>
                    <option value="CA">Sonia Delgado</option>
                    <option value="FR">Maria Rodriguez</option>
                    <option value="DE">Henry Hernandez</option>
                  </select>
                    </div>
                    <div>
                        <label
                          for="number"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Nie
                        </label>
                        <input
                          type="number"
                          id="number"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="1223457890"
                          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                          disabled
                        />
                      </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 lg:col-span-1">
              <div className="h-full py-6 px-6 rounded-xl border border-gray-200 bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgregarPretacion;
