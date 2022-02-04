const Footer = () => {
   return (
      <footer className="text-center lg:text-left bg-gradient-to-b place-self-end w-full from-zinc-900 to-[#1A1B1C]">
         <div className="flex justify-center items-center lg:justify-between p-6 border-b border-gray-300 container mx-auto">
            <div className="mr-12 hidden lg:block">
               <span>Get connected with us on the Discord server:</span>
            </div>
            <div className="flex justify-center">
               <a href="https://discord.gg/xdSAeDPT8y" className="mr-6 ">
                  <svg aria-hidden="true" focusable="false" className="w-3.5" role="img" viewBox="0 0 71 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" fill="currentColor" />
                  </svg>
               </a>
            </div>
         </div>
         <div className="py-10 text-center md:text-left container mx-auto">
            <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               <div className="">
                  <h6 className="
                     uppercase
                     font-semibold
                     mb-4
                     flex
                     items-center
                     justify-center
                     md:justify-start
                  ">
                     <svg aria-hidden="true" focusable="false" className="w-4 mr-3" role="img" viewBox="0 0 388 504" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M169.83 0.989959C78.17 1.26996 2.88003 1.71995 2.53003 1.99995C2.18003 2.27995 1.44004 114.1 0.890044 250.5C0.330044 386.9 0.130031 499.51 0.440031 500.75C0.830031 502.33 1.74003 503 3.50003 503C5.45003 503 12.09 496.81 33.78 474.75C49.07 459.21 69.43 438.53 79.03 428.79L96.5 411.07C101.93 415.91 116.32 429.73 132 444.91C147.68 460.08 166.57 478.43 174 485.67C181.43 492.92 188.74 499.79 190.25 500.93C191.88 502.16 193.91 502.81 195.25 502.53C196.49 502.27 200.2 499.5 203.5 496.37C206.8 493.25 214.45 485.89 220.5 480.03C226.55 474.17 243.42 457.95 258 443.99C272.58 430.03 285.96 417.24 287.76 415.56L291.01 412.5C328.59 449.75 348.85 469.78 360.28 481.03C371.7 492.29 381.95 501.95 383.04 502.5C384.37 503.17 385.37 503.17 386.03 502.5C386.69 501.85 387.03 469.55 387.03 409.5C387.02 358.9 386.68 246.66 386.26 160.07C385.66 36.34 385.23 2.35996 384.25 1.31996C383.27 0.289961 377.97 0.0499591 359.75 0.239959C346.96 0.379959 261.5 0.719959 169.83 0.989959Z" fill="#F2F2F2" />
                        <path d="M191.33 22.7099C190.69 24.2499 189.87 27.0699 189.5 28.9999C189.13 30.9299 188.02 35.1999 187.04 38.4999C186.06 41.7999 184.47 46.0699 183.51 47.9999C182.55 49.9299 178.65 54.6499 174.86 58.4999C171.06 62.3499 168.31 65.8199 168.73 66.2099C169.15 66.5999 172.2 67.1999 175.5 67.5399C178.8 67.8799 182.77 68.6899 184.33 69.3299C186.04 70.0399 187.38 71.4899 187.71 72.9999C188.01 74.3799 187.69 77.2999 187.01 79.4999C186.32 81.6999 183.79 86.5399 181.38 90.2499C178.97 93.9599 175.54 98.0699 173.75 99.3699C171.96 100.68 169.38 102.31 168 103C166.63 103.69 162.13 104.6 158 105.01C153.59 105.46 148.65 105.36 146 104.77C143.52 104.22 139.02 102.68 136 101.35C131.53 99.3899 129.79 97.8699 126.72 93.2199C124.1 89.2499 122.95 86.4299 122.99 83.9999C123.01 82.0699 122.58 79.0399 122.02 77.2499C121.46 75.4599 120.1 73.5499 119 72.9999C117.9 72.4499 115.99 71.9899 114.75 71.9699C113.51 71.9499 111.77 72.7399 110.87 73.7199C109.97 74.6999 108.96 76.5099 108.62 77.7499C108.28 78.9899 108.39 80.7899 108.87 81.7499C109.35 82.7099 111.26 85.0299 113.12 86.9099L116.5 90.3099C115.43 102.08 114.26 107.52 113.22 110C112.17 112.48 109.9 115.74 108.16 117.25C106.42 118.76 103.31 120.5 101.25 121.12C99.19 121.74 95.81 121.96 93.75 121.62C90.55 121.09 87.38 118.4 72.25 103.35C62.49 93.6399 53.15 84.8599 51.5 83.8499C49.85 82.8399 47.71 82.0099 46.75 81.9999C45.79 81.9999 45 82.6799 45 83.4999C45 84.3199 51.64 93.8499 59.75 104.67C67.86 115.49 76.07 125.62 78 127.19C79.93 128.77 83.3 130.93 85.5 132.01C88.23 133.35 91.56 133.97 96 133.96C99.57 133.96 104.3 133.52 106.5 132.99C108.71 132.46 111.99 130.57 113.83 128.77C115.66 126.97 117.96 123.93 118.93 122C119.89 120.07 121.55 117.07 122.59 115.32C123.83 113.25 125.55 111.93 127.5 111.55C129.15 111.24 131.74 110.98 133.25 110.99C134.76 110.99 136.23 111.45 136.5 112C136.77 112.55 139.59 114.24 142.75 115.75C147.92 118.22 149.56 118.5 159 118.46C168.83 118.43 169.82 118.24 174.44 115.46C177.16 113.83 181.21 110.08 183.44 107.13C185.67 104.17 188.29 101.36 189.25 100.88C190.21 100.4 192.8 99.9999 195 99.9999C198.61 99.9999 199.57 100.6 204.75 106.13C208.39 110.01 212.43 113.13 215.75 114.63C218.64 115.93 224.49 117.53 228.75 118.17C234.62 119.05 237.23 119.05 239.5 118.18C241.15 117.54 243.06 117.02 243.75 117.01C244.44 117.01 246.91 115.72 249.25 114.16C251.59 112.6 254.85 110.99 256.5 110.59C258.52 110.09 259.99 110.29 261 111.2C261.83 111.94 263.85 115.18 265.5 118.4C267.41 122.14 270.13 125.5 273 127.68C275.48 129.57 279.3 131.62 281.5 132.24C284.55 133.1 287.4 133.06 293.5 132.07C298.16 131.31 302.96 129.84 305 128.54C306.92 127.31 310.84 123.65 313.69 120.4C316.54 117.16 325.21 107.07 332.94 97.9999C343.61 85.4699 347 80.8399 347 78.7499C347 76.4099 346.59 75.9999 344.25 76.0199C342.12 76.0299 339.72 77.8999 333.64 84.2699C329.31 88.7999 322.07 96.5499 317.55 101.5C313.02 106.45 307.56 112.42 305.41 114.77C302.09 118.4 300.75 119.13 296.5 119.64C293.75 119.96 288.58 119.72 285 119.1C281.42 118.47 277.83 117.34 277 116.59C276.17 115.84 274.43 112.37 273.13 108.86C271.36 104.12 270.9 101.35 271.33 97.9999C271.75 94.7699 272.77 92.6599 274.98 90.4999C276.99 88.5299 278.26 86.1199 278.65 83.4999C279.06 80.7799 278.73 78.4599 277.62 76.2499C276.44 73.8799 275.32 72.9999 273.5 72.9999C272.13 72.9999 269.99 73.5199 268.75 74.1599C267.51 74.7999 265.97 76.0399 265.32 76.9099C264.67 77.7899 263.84 80.7499 263.47 83.4999C262.87 87.9999 262.14 89.1499 256.15 94.9999C251.52 99.5299 247.98 102.03 244.5 103.26C241.55 104.29 236.83 104.98 233 104.93C229.42 104.88 225.03 104.32 223.23 103.67C221.43 103.03 217.12 100.02 213.65 96.9999C210.18 93.9799 205.93 89.6999 204.2 87.4999C201.45 83.9999 201.05 82.7199 201.03 77.2499C201 71.5799 201.25 70.8099 203.75 68.9699C205.93 67.3499 207.99 66.9399 213.75 66.9699C217.74 66.9799 221.22 66.6599 221.48 66.2499C221.75 65.8399 218.37 61.7899 213.98 57.2499C209.59 52.7099 205.25 47.5399 204.32 45.7499C203.4 43.9599 201.8 39.5699 200.77 35.9999C199.74 32.4299 198.33 27.4799 197.64 24.9999C196.76 21.8599 195.79 20.4099 194.43 20.2099C193.11 20.0199 192.12 20.8099 191.33 22.7099ZM187.27 125.15C183.55 128.53 178.25 132.35 175.5 133.64C171.89 135.33 168.7 135.98 164 136C160.43 136 154.8 135.5 151.5 134.88C148.2 134.26 143.36 132.46 140.75 130.87C138.14 129.29 135.32 128.23 134.5 128.5C133.68 128.77 132.1 130.8 131 133C129.85 135.29 126.55 138.88 123.25 141.41C120.09 143.84 115.81 146.54 113.75 147.41C111.41 148.4 107.08 149 102.25 149C97.99 149.01 92.1 148.44 89.16 147.75C84.55 146.67 83.74 146.71 83.25 148C82.94 148.82 82.87 154.13 83.09 159.78C83.4 167.49 83.88 170.3 85 171.03C85.95 171.64 126.17 171.9 194.17 171.75C253.38 171.61 302.21 171.12 302.67 170.67C303.13 170.21 303.65 165.03 303.83 159.17C304.07 151.05 303.83 148.34 302.83 147.85C302.1 147.49 299.48 148.32 297 149.69C292.99 151.91 291.74 152.12 285.5 151.57C281.19 151.2 276.58 150.03 273.5 148.53C270.75 147.19 264.67 142.45 260 138C254.7 132.95 250.94 130.09 250 130.41C249.17 130.7 245.13 132.12 241 133.58C234.46 135.89 232.47 136.16 225.5 135.68C221.1 135.37 215.92 134.67 214 134.12C212.08 133.56 206.8 129.94 202.27 126.06L194.04 119L187.27 125.15ZM195 208.46C191.43 209.2 185.8 210.7 182.5 211.79C179.2 212.89 173.57 214.91 170 216.28C166.43 217.66 159.23 219.8 154 221.05C148.77 222.29 143.95 223.8 143.28 224.41C142.61 225.01 142.27 226.51 142.53 227.75C142.86 229.32 143.81 230.08 145.69 230.25C147.85 230.45 148.56 231.19 149.27 234C149.76 235.93 150.01 253.93 149.83 274C149.54 306.06 149.29 310.93 147.78 314C146.83 315.92 145.03 318.73 143.78 320.22C141.62 322.8 141.59 323.04 143.21 324.72C144.84 326.4 145.29 326.41 151.71 324.85C155.45 323.95 163.57 322.82 169.76 322.35L181.02 321.5C181 317.24 180.44 315.95 179.75 315.88C179.06 315.82 178.16 315.82 177.75 315.88C177.34 315.95 176.21 314.78 175.25 313.29C173.66 310.84 173.5 307.03 173.5 271.54C173.5 238.3 173.73 231.98 175.06 229C175.92 227.07 178.17 224.25 180.06 222.73C182.61 220.67 185.43 219.66 191 218.79C196.68 217.91 199.84 217.9 204 218.77C208.47 219.71 210.24 220.73 213.43 224.21C215.59 226.57 218.03 230.07 218.84 232C219.69 234.02 220.53 240.16 220.82 246.5C221.26 256.22 221.04 258.37 218.91 264.97C217.06 270.71 215.46 273.52 212 277.08C208.7 280.48 206.03 282.16 202 283.37C198.98 284.28 193.69 285.02 190.25 285.01C185.58 285 183.87 285.38 183.5 286.5C183.23 287.33 183 288.9 183 290C183 291.2 184 292.4 185.5 293C186.88 293.55 191.82 294 196.5 294C202.57 294 206.79 293.39 211.25 291.86C214.69 290.69 219.3 288.82 221.5 287.71C223.7 286.6 228.22 282.95 231.54 279.6C234.93 276.18 238.72 271.08 240.18 268C241.6 264.98 243.35 260.48 244.07 258C244.78 255.52 245.35 249 245.33 243.5C245.3 235.44 244.83 232.33 242.94 227.5C241.65 224.2 239.23 219.75 237.55 217.62C235.87 215.49 232.02 212.35 229 210.65C223.88 207.78 222.73 207.55 212.5 207.34C206.27 207.22 198.68 207.7 195 208.46ZM96.5 211.66C93.2 213.03 83.3 218.2 74.5 223.14C63.17 229.51 57.89 233.06 56.43 235.32C55.29 237.07 53.16 241.88 51.7 246C50.24 250.13 48.59 256.2 48.03 259.5C47.47 262.8 46.98 270.23 46.93 276C46.87 283.71 47.41 288.62 48.96 294.5C50.12 298.9 52.13 304.3 53.41 306.5C54.7 308.7 57.05 312.03 58.63 313.9C60.21 315.77 63.3 318.5 65.5 319.97C67.7 321.43 71.52 323.39 74 324.31C76.87 325.38 81.49 325.99 86.75 325.99C92.8 326 97.07 325.34 102.75 323.52C107.01 322.15 113.2 319.44 116.5 317.49C119.8 315.53 122.61 313.95 122.75 313.97C122.89 313.99 125.81 311.7 129.25 308.88C132.69 306.07 135.84 303.14 136.25 302.38C136.71 301.54 136.22 300.22 135 299L133 297C127.19 301.45 122.13 304.49 118 306.62C110.84 310.31 110.07 310.49 101 310.49C93.16 310.49 90.8 310.12 87.5 308.33C85.3 307.14 81.86 304.44 79.86 302.33C77.85 300.23 75.32 296.7 74.23 294.5C73.14 292.3 71.52 287.91 70.63 284.75C69.73 281.59 69 278.1 69 277C69 275.46 69.86 274.87 72.75 274.42C74.81 274.1 86.85 274.16 99.5 274.55C121.23 275.22 122.59 275.15 124.19 273.38C125.12 272.35 127.24 268.8 128.91 265.5C131.56 260.25 131.76 259.31 130.49 258C129.21 256.67 128.46 256.69 123.77 258.24C120.87 259.2 115.35 260.43 111.5 260.98C107.65 261.53 96.63 262.28 87 262.66C71.19 263.28 69.43 263.19 68.75 261.67C68.34 260.75 68.48 256.96 69.06 253.25C69.64 249.54 71.33 243.84 72.81 240.59C74.37 237.15 77.21 233.17 79.57 231.09C82.51 228.5 85.3 227.15 89.57 226.24C92.83 225.55 96.74 224.99 98.25 224.99C99.76 225 103.36 226.05 106.25 227.34C109.14 228.62 113.75 231.58 116.5 233.92C119.55 236.51 122.27 238.04 123.46 237.83C124.62 237.64 127.29 234.57 129.96 230.34C132.46 226.41 135.4 221.98 136.5 220.49C138.06 218.39 138.25 217.43 137.39 216.15C136.64 215.03 134.71 214.46 131.39 214.37C128.7 214.3 123.35 213.07 119.5 211.64C115.2 210.05 110.57 209.07 107.5 209.11C104.59 209.15 100 210.21 96.5 211.66ZM301 209.96C300.17 210.42 296.35 212.18 292.5 213.87C288.65 215.55 280.33 219.8 274 223.32C267.67 226.83 260.92 231.25 259 233.14C256.95 235.15 254.35 239.47 252.73 243.54C251.21 247.37 249.32 254.1 248.52 258.5C247.72 262.9 247.06 270.33 247.04 275C247.03 279.67 247.47 286.42 248.03 290C248.59 293.58 250.61 299.76 252.52 303.75C254.46 307.8 257.99 312.99 260.5 315.5C262.98 317.98 267.81 321.34 271.25 322.97C276.71 325.56 278.64 325.94 286.5 325.98C293.41 326.01 297.12 325.48 302.5 323.65C306.35 322.35 312.2 319.93 315.5 318.27C318.8 316.61 324.99 312.5 329.25 309.13C333.51 305.76 337 302.77 337 302.5C337 302.23 336.55 301.1 336 300C335.45 298.9 334.44 297.98 333.75 297.96C333.06 297.94 329.8 299.7 326.5 301.86C323.2 304.02 317.58 307.02 314 308.51C308.29 310.9 306.53 311.18 299.5 310.79C294.11 310.49 290.19 309.68 287.5 308.29C285.3 307.17 281.81 304.39 279.75 302.12C277.69 299.85 275.33 296.65 274.5 295C273.67 293.35 272.28 289.41 271.4 286.25C270.52 283.09 269.62 279.49 269.4 278.25C269.1 276.53 269.65 275.75 271.75 274.94C273.51 274.26 283.48 273.99 299.42 274.19L324.34 274.5C332.27 260.26 332.4 259.76 330.77 258.18C329.16 256.61 328.68 256.62 323.27 258.4C320.1 259.44 314.58 260.67 311 261.12C307.42 261.58 296.51 262.3 286.75 262.72L268.99 263.5C268.98 254.98 269.94 249.57 271.11 246C272.29 242.43 274.22 237.82 275.4 235.76C276.59 233.7 279.35 230.88 281.53 229.5C283.71 228.11 288.42 226.43 292 225.78C297.56 224.76 299.3 224.82 304 226.24C307.72 227.36 311.36 229.54 315.25 232.95C318.41 235.73 321.79 237.99 322.75 237.98C323.71 237.98 324.98 237.64 325.57 237.23C326.15 236.83 328.07 234.02 329.83 231C331.58 227.98 334.48 223.55 336.26 221.16C339.44 216.9 339.47 216.8 337.5 215.38C336.31 214.52 334.48 214.18 333 214.54C331.46 214.91 326.96 213.97 321.25 212.07C315.85 210.28 310.02 209.02 307.25 209.06C304.64 209.09 301.83 209.5 301 209.96Z" fill="black" />
                     </svg>

                     Extended Mods Family
                  </h6>
                  <p>
                     Extended Portraits and Ethnicities is a Crusader Kings 3 modification, part of the Extended Mods family aiming to improve player's experience.
                  </p>
               </div>
               <div className="">
                  <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                     Other Mods
                  </h6>
                  <p className="mb-4">
                     <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2650385452" className="" referrerPolicy="origin">Succession Expanded</a>
                  </p>
                  <p className="mb-4">
                     <a href="#!" className="" referrerPolicy="origin">Unit Pack Expanded</a>
                  </p>
                  <p className="mb-4">
                     <a href="#!" className="" referrerPolicy="origin">Government Expanded</a>
                  </p>

               </div>
               <div className="">
                  <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                     Useful links
                  </h6>
                  <p className="mb-4">
                     <a href="#!" className="">Steam Collection</a>
                  </p>
                  <p className="mb-4">
                     <a href="#!" className="">Discord</a>
                  </p>
               </div>
               <div className="">
                  <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                     Contact
                  </h6>
                  <p className="flex items-center justify-center md:justify-start mb-4">
                     <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope"
                        className="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512">
                        <path fill="currentColor"
                           d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
                        </path>
                     </svg>
                     expanded.mods@gmail.com
                  </p>
               </div>
            </div>
         </div>
         <div className="text-center p-6 bg-zinc-800">
            <span>© 2021 Copyright: </span>
            <a className=" font-semibold" href="https://tailwind-elements.com/">EPE Team and Paradox Interactive.</a>
            <p>This website was made by <a href="https://github.com/alltheatreides" className="text-blue-400">Atreides</a></p>
         </div>
      </footer>
   );
}

export default Footer;