import { Breadcrumb } from 'flowbite-react';
export const calendarTheme = {
    "root": {
      "base": "relative"
    },
    "popup": {
      "root": {
        "base": "absolute top-10 z-50 block pt-2",
        "inline": "relative top-0 z-auto",
        "inner": "inline-block rounded-lg bg-white p-4 shadow-lg dark:bg-gray-700"
      },
      "header": {
        "base": "",
        "title": "px-2 py-3 text-center font-semibold text-gray-900 dark:text-white",
        "selectors": {
          "base": "mb-2 flex justify-between",
          "button": {
            "base": "rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",
            "prev": "",
            "next": "",
            "view": ""
          }
        }
      },
      "view": {
        "base": "p-1"
      },
      "footer": {
        "base": "mt-2 flex space-x-2",
        "button": {
          "base": "w-full rounded-lg px-5 py-2 text-center text-sm font-medium focus:ring-4 focus:ring-blue-300",
          "today": "bg-blue-600 text-white hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-600",
          "clear": "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
        }
      }
    },
    "views": {
      "days": {
        "header": {
          "base": "mb-1 grid grid-cols-7",
          "title": "h-6 text-center text-sm font-medium leading-6 text-gray-500 dark:text-gray-400"
        },
        "items": {
          "base": "grid w-64 grid-cols-7",
          "item": {
            "base": "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
            "selected": "bg-blue-600 text-white hover:bg-blue-600",
            "disabled": "text-gray-500"
          }
        }
      },
      "months": {
        "items": {
          "base": "grid w-64 grid-cols-4",
          "item": {
            "base": "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
            "selected": "bg-blue-600 text-white hover:bg-blue-600",
            "disabled": "text-gray-500"
          }
        }
      },
      "years": {
        "items": {
          "base": "grid w-64 grid-cols-4",
          "item": {
            "base": "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
            "selected": "bg-blue-600 text-white hover:bg-blue-600",
            "disabled": "text-gray-500"
          }
        }
      },
      "decades": {
        "items": {
          "base": "grid w-64 grid-cols-4",
          "item": {
            "base": "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
            "selected": "bg-blue-600 text-white hover:bg-blue-600",
            "disabled": "text-gray-500"
          }
        }
      }
    }
  }


export const spinnerTheme = {
    "base": "inline animate-spin text-gray-200",
    "color": {
      "failure": "fill-red-600",
      "gray": "fill-gray-600",
      "info": "fill-blue-600",
      "pink": "fill-pink-600",
      "purple": "fill-purple-600",
      "success": "fill-green-500",
      "warning": "fill-yellow-400"
    },
    "light": {
      "off": {
        "base": "dark:text-gray-600",
        "color": {
          "failure": "",
          "gray": "dark:fill-gray-300",
          "info": "",
          "pink": "",
          "purple": "",
          "success": "",
          "warning": ""
        }
      },
      "on": {
        "base": "",
        "color": {
          "failure": "",
          "gray": "",
          "info": "",
          "pink": "",
          "purple": "",
          "success": "",
          "warning": ""
        }
      }
    },
    "size": {
      "xs": "h-3 w-3",
      "sm": "h-4 w-4",
      "md": "h-6 w-6",
      "lg": "h-8 w-8",
      "xl": "h-10 w-10"
    }
  }

  export const breadcrumbTheme = {
    "root": {
      "base": "",
      "list": "flex items-center"
    },
    "item": {
      "base": "group flex items-center",
      "chevron": "mx-1 h-4 w-4 text-gray-400 group-first:hidden md:mx-2",
      "href": {
        "off": "flex items-center text-sm font-medium text-gray-500 dark:text-gray-400",
        "on": "flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
      },
      "icon": "mr-2 h-4 w-4"
    }
  }

 export const tableTheme = {
    "root": {
      "base": "w-full text-left text-sm text-gray-500 dark:text-gray-400",
      "shadow": "absolute left-0 top-0 -z-10 h-full w-full rounded-lg bg-white drop-shadow-md dark:bg-gray-900",
      "wrapper": "relative"
    },
    "body": {
      "base": "group/body",
      "cell": {
        "base": "px-6 py-4 group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg"
      }
    },
    "head": {
      "base": "group/head text-xs uppercase text-gray-700 dark:text-gray-400",
      "cell": {
        "base": "bg-gray-50 px-6 py-3 group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg dark:bg-gray-700"
      }
    },
    "row": {
      "base": "group/row",
      "hovered": "hover:bg-gray-50 dark:hover:bg-gray-600",
      "striped": "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
    }
  }