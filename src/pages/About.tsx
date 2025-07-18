const About = () => {
  return (
    <section>
      {/* Top */}
      <div className="bg-beige md:px-[120px] md:py-[80px] px-[50px] py-[30px]">
        <div className="max-w-[1440px] mx-auto">
          <h1 className="md:text-h1 text-h3 text-blue font-bold text-center">
            About All You Can Eat
          </h1>
          <div className="md:flex md:flex-row flex-col items-center justify-between gap-4">
            <img
              src="/Rectangle 3.png"
              alt=""
              className="md:w-[577px] md:h-[600px]"
            />
            <div>
              <h2 className="md:text-h2 text-h6 text-center font-bold text-blue max-w-[580px]">
                A recipe blog by Sharon Daniels
              </h2>
              <p className="text-pr text-center">
                We believe that healthy eating should never compromise on flavor
                or the joy of cooking. Our recipes are crafted with care,
                focusing on wholesome ingredients, vibrant flavors, and
                innovative cooking techniques. We invite you to explore a world
                where nutritious choices and culinary delight seamlessly merge.
                Let's rediscover the joy in every kitchen adventure, making
                every meal not just nourishing but also a source of pure joy and
                inspiration. Join us on this flavorful and wholesome exploration
                as we bring the joy back to cooking, one delicious recipe at a
                time.
              </p>
            </div>
          </div>
          <div className="hidden md:flex md:flex-col md:items-center md:justify-center md:gap-3 md:mt-3">
            <p className="text-pr uppercase">As Seen in</p>
            <div className="grid md:grid-cols-6 sm:grid-cols-2 grid-cols-1 gap-4 ">
              {/* Logo */}
              <div>
                <svg
                  width="61"
                  height="32"
                  viewBox="0 0 61 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.347 0.474886L15.7443 27.2511L17.9726 27.653L17.9361 27.8356H12.3836L16.6941 2.66667L15.6712 4.45662C14.6849 2.92237 12.274 2.19178 11.105 2.19178C9.57078 2.19178 8.21918 3.6895 8.14612 4.3105L6.86758 11.105H12.0913L12.0183 11.5068L10.5936 11.6895L6.79452 11.5799L3.3242 30.137L0.0365297 32H0L3.43379 11.5068H0.949772L1.02283 10.9954L3.50685 10.8493H3.54338L3.76256 9.49772C4.16438 7.05023 10.0822 0.109588 12.5662 0C13.6986 0.109588 16.1826 0.146119 17.3151 0.657535L19.9087 0.438355L20.347 0.474886Z"
                    fill="#292929"
                  />
                  <path
                    d="M22.998 28.3105C21.4272 27.9452 19.5642 26.5205 19.6007 22.9772C19.6007 16.2557 26.3953 10.0091 32.0574 10.1918C33.2263 10.6301 35.0163 11.3607 35.0528 15.1598C35.0528 21.2237 28.9889 28.347 22.998 28.3105ZM25.2628 27.1416C29.135 27.5069 31.0345 21.2968 31.5094 15.7078C31.6555 13.7717 30.8519 11.5799 29.0619 11.4338C25.409 11.0685 23.1441 18.0822 23.1441 23.0137C23.1441 25.0959 23.7651 26.9954 25.2628 27.1416Z"
                    fill="#292929"
                  />
                  <path
                    d="M35.4892 10.9589L35.5257 10.6667H41.1513L41.5531 26.8128L41.5896 26.9589L47.2152 17.0228L46.5211 11.3973L49.6627 10.6667L51.4161 26.8128V26.8858C53.0965 23.7078 57.4435 15.4886 57.5531 14.7945C57.9914 13.4795 57.0051 10.8493 55.1421 10.8493C55.1787 10.7763 55.1786 10.7397 55.1786 10.6667H60.2563L51.6353 27.9087H50.8681L48.6033 28.3836L47.3248 17.8265L41.7723 27.9087H41.0051L38.7403 28.3836L37.6809 11.1781L35.4892 10.9589Z"
                    fill="#292929"
                  />
                </svg>
              </div>
              <div>
                <svg
                  width="100"
                  height="32"
                  viewBox="0 0 104 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.229492 31.5493V1.95305H3.38442V31.5493H0.229492Z"
                    fill="#292929"
                  />
                  <path
                    d="M9.16728 31.5493V6.76056H11.7213L12.1219 9.41471C12.389 8.41315 13.0066 7.64528 13.9748 7.11111C14.943 6.57695 15.9445 6.30986 16.9795 6.30986C18.7489 6.30986 20.0343 6.62702 20.8355 7.26135C21.6702 7.86229 22.2043 8.66354 22.438 9.6651C22.6717 10.6333 22.7886 11.7016 22.7886 12.8701V31.5493H19.6837V13.3208C19.6837 12.7199 19.667 12.1356 19.6336 11.5681C19.6003 11.0005 19.4667 10.4997 19.233 10.0657C19.0327 9.59833 18.6821 9.23109 18.1814 8.96401C17.6806 8.69692 16.9461 8.56338 15.9779 8.56338C15.1433 8.56338 14.4589 8.73031 13.9247 9.06416C13.4239 9.36463 13.04 9.73187 12.7729 10.1659C12.5392 10.5665 12.3723 10.9504 12.2721 11.3177V31.5493H9.16728Z"
                    fill="#292929"
                  />
                  <path
                    d="M30.5566 31.5493V4.20658H25.5988V1.95305H38.7694V4.20658H33.7115V31.5493H30.5566Z"
                    fill="#292929"
                  />
                  <path
                    d="M41.9822 31.5493V6.76056H44.5863L44.9368 9.41471C45.3041 8.47992 45.905 7.81221 46.7397 7.41158C47.5743 7.01096 48.4089 6.76056 49.2436 6.66041C50.1784 6.46009 51.0798 6.4434 51.9478 6.61033V9.06416C51.8143 9.03078 51.5806 8.99739 51.2467 8.96401C50.9128 8.93062 50.5456 8.91393 50.145 8.91393C49.7777 8.91393 49.4272 8.9807 49.0933 9.11424C47.9582 9.24778 47.0067 9.6651 46.2389 10.3662C45.471 11.0339 45.0871 11.952 45.0871 13.1205V31.5493H41.9822Z"
                    fill="#292929"
                  />
                  <path
                    d="M61.0585 32C59.3892 32 58.0371 31.8164 57.0022 31.4491C55.9672 31.0485 55.2161 30.3307 54.7487 29.2958C54.2813 28.2608 54.0476 26.7585 54.0476 24.7887V12.4194C54.0476 10.0824 54.565 8.47992 55.6 7.61189C56.6683 6.74387 58.4211 6.30986 60.8582 6.30986C63.2286 6.30986 64.9312 6.74387 65.9662 7.61189C67.0345 8.47992 67.5687 10.0824 67.5687 12.4194V18.8294H57.1524V25.8404C57.1524 27.4429 57.4028 28.5613 57.9036 29.1956C58.4044 29.7966 59.4226 30.097 60.9584 30.097C62.3606 30.097 63.2953 29.7966 63.7627 29.1956C64.2301 28.5947 64.4638 27.4763 64.4638 25.8404V22.6354H67.5687V24.7387C67.5687 26.675 67.335 28.1774 66.8676 29.2457C66.4002 30.2806 65.6824 30.9984 64.7142 31.3991C63.7794 31.7997 62.5609 32 61.0585 32ZM57.1524 17.2269H64.4638V12.3192C64.4638 10.9171 64.2301 9.8988 63.7627 9.26448C63.2953 8.63015 62.3272 8.31299 60.8582 8.31299C59.3892 8.31299 58.4044 8.63015 57.9036 9.26448C57.4028 9.8988 57.1524 10.9171 57.1524 12.3192V17.2269Z"
                    fill="#292929"
                  />
                  <path
                    d="M72.0096 31.5493V6.76056H74.5636L74.9642 9.41471C75.2313 8.41315 75.8489 7.64528 76.8171 7.11111C77.7853 6.57695 78.7869 6.30986 79.8218 6.30986C81.5912 6.30986 82.8766 6.62702 83.6778 7.26135C84.5125 7.86229 85.0467 8.66354 85.2803 9.6651C85.5141 10.6333 85.6309 11.7016 85.6309 12.8701V31.5493H82.5261V13.3208C82.5261 12.7199 82.5094 12.1356 82.476 11.5681C82.4426 11.0005 82.309 10.4997 82.0753 10.0657C81.875 9.59833 81.5245 9.23109 81.0237 8.96401C80.5229 8.69692 79.7884 8.56338 78.8203 8.56338C77.9856 8.56338 77.3012 8.73031 76.767 9.06416C76.2663 9.36463 75.8823 9.73187 75.6152 10.1659C75.3815 10.5665 75.2146 10.9504 75.1145 11.3177V31.5493H72.0096Z"
                    fill="#292929"
                  />
                  <path
                    d="M96.053 31.9499C94.8178 31.9499 93.7995 31.7997 92.9983 31.4992C92.197 31.1654 91.5627 30.7147 91.0953 30.1471C90.6613 29.5462 90.3608 28.8117 90.1939 27.9437C90.027 27.0423 89.9435 26.024 89.9435 24.8889V12.5196C89.9435 11.6182 90.027 10.8002 90.1939 10.0657C90.3942 9.29786 90.7114 8.64684 91.1454 8.11268C91.5794 7.54512 92.1636 7.11111 92.8981 6.81064C93.6326 6.47679 94.5674 6.30986 95.7025 6.30986C97.0379 6.30986 98.0729 6.51017 98.8074 6.9108C99.5752 7.31143 100.126 7.79552 100.46 8.36307V0H103.565V31.5493H101.411L101.111 29.1956C100.911 29.6296 100.61 30.0636 100.21 30.4977C99.8423 30.8983 99.3248 31.2488 98.6571 31.5493C98.0228 31.8164 97.1548 31.9499 96.053 31.9499ZM96.6039 30.0469C97.5721 30.0469 98.3233 29.88 98.8574 29.5462C99.3916 29.1789 99.7588 28.7115 99.9591 28.144C100.193 27.5764 100.326 26.9588 100.36 26.2911C100.427 25.59 100.46 24.9056 100.46 24.2379V10.6667C100.36 10.3662 100.176 10.0323 99.9091 9.6651C99.6754 9.29786 99.3081 8.9807 98.8074 8.71361C98.3066 8.44653 97.6222 8.31299 96.7541 8.31299C95.786 8.31299 95.0515 8.44653 94.5507 8.71361C94.0499 8.9807 93.6827 9.34794 93.449 9.81534C93.2487 10.2493 93.1318 10.7501 93.0984 11.3177C93.065 11.8852 93.0484 12.4695 93.0484 13.0704V25.2895C93.0484 26.0908 93.0984 26.8586 93.1986 27.5931C93.2987 28.3276 93.5992 28.9285 94.1 29.3959C94.6008 29.8299 95.4354 30.0469 96.6039 30.0469Z"
                    fill="#292929"
                  />
                </svg>
              </div>
              <div>
                <svg
                  width="100"
                  height="32"
                  viewBox="0 0 134 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M34.0531 31.3425H29.1874L7.31339 3.37534V28.0548L12.7928 31.2548V31.3425H0.255859V31.2548L5.73531 28.0548V2.93699L0.299695 0.745207V0.657534H10.3381L30.2833 26.4767V3.94521L24.8038 0.745207V0.657534H37.297V0.745207L31.8175 3.94521V28.4493L34.0531 31.3425Z"
                    fill="#292929"
                  />
                  <path
                    d="M40.3672 0.701368V0.657534H55.7973V0.745207L49.8357 3.8137V28.1863L55.7973 31.2548V31.3425H40.3672V31.2548L46.3288 28.1863V3.8137L40.3672 0.701368Z"
                    fill="#292929"
                  />
                  <path
                    d="M93.0857 31.3425H88.2199L66.3459 3.37534V28.0548L71.8254 31.2548V31.3425H59.2884V31.2548L64.7678 28.0548V2.93699L59.3322 0.745207V0.657534H69.3706L89.3158 26.4767V3.94521L83.8363 0.745207V0.657534H96.3295V0.745207L90.85 3.94521V28.4493L93.0857 31.3425Z"
                    fill="#292929"
                  />
                  <path
                    d="M115.958 32C106.27 32 98.6863 25.9069 98.6863 16.0877C98.6863 6.4 106.27 0 115.958 0C125.601 0 133.229 6.4 133.229 16.0877C133.229 25.9069 125.645 32 115.958 32ZM103.158 16.0877C103.158 25.2493 108.243 30.6411 115.958 30.6411C123.716 30.6411 128.758 25.2493 128.758 16.0877C128.758 7.10137 123.716 1.31507 115.958 1.31507C108.243 1.31507 103.158 7.10137 103.158 16.0877Z"
                    fill="#292929"
                  />
                </svg>
              </div>

              <div>
                <svg
                  width="100"
                  height="32"
                  viewBox="0 0 68 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.3122 32C6.88277 32 5.57947 31.7237 4.40229 31.1712C3.22511 30.6186 2.28818 29.8018 1.59148 28.7207C0.906795 27.6276 0.564453 26.2883 0.564453 24.7027V16.7568H6.83472V24.3243C6.83472 24.8769 6.94283 25.3213 7.15905 25.6577C7.38728 25.994 7.74764 26.1622 8.24013 26.1622C9.18908 26.1622 9.66355 25.5796 9.66355 24.4144V0H16.0599V23.7838C16.0599 25.4655 15.7296 26.9249 15.069 28.1622C14.4083 29.3874 13.4954 30.3363 12.3302 31.009C11.1651 31.6697 9.82572 32 8.3122 32Z"
                    fill="#292929"
                  />
                  <path
                    d="M25.8437 32C23.2011 32 21.2551 31.2613 20.0059 29.7838C18.7566 28.2943 18.132 26.1081 18.132 23.2252V0H24.2942V22.973C24.2942 23.5015 24.3242 24.012 24.3843 24.5045C24.4443 24.985 24.5825 25.3814 24.7987 25.6937C25.0149 26.006 25.3633 26.1622 25.8437 26.1622C26.3362 26.1622 26.6906 26.012 26.9068 25.7117C27.123 25.3994 27.2551 24.997 27.3032 24.5045C27.3633 24.012 27.3933 23.5015 27.3933 22.973V0H33.5554V23.2252C33.5554 26.1081 32.9308 28.2943 31.6816 29.7838C30.4323 31.2613 28.4864 32 25.8437 32Z"
                    fill="#292929"
                  />
                  <path
                    d="M35.9879 31.7117V0H42.5104L45.4293 15.1892V0H51.5554V31.7117H45.3572L42.1861 15.8559V31.7117H35.9879Z"
                    fill="#292929"
                  />
                  <path
                    d="M54.3663 31.7117V0H67.0509V6.12613H60.8167V12.3063H66.7987V18.2703H60.8167V25.5315H67.4654V31.7117H54.3663Z"
                    fill="#292929"
                  />
                </svg>
              </div>
              <div>
                <svg
                  width="100"
                  height="32"
                  viewBox="0 0 89 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.91058 25.1105H25.4403V32H0.46582V25.2918L21.9049 7.07082V6.70821H1.00973V0H25.259V6.52691L3.91058 24.7479V25.1105Z"
                    fill="#292929"
                  />
                  <path d="M29.7767 0H31.4991V32H29.7767V0Z" fill="#292929" />
                  <path
                    d="M36.5933 32V0H38.225L60.5253 22.9348V0H62.2477V32H60.7066L38.3157 9.24646V32H36.5933Z"
                    fill="#292929"
                  />
                  <path
                    d="M69.0345 25.2918H88.7966V32H67.3121V0H88.4339V6.61757H69.0345V16.0907H85.3518V17.8584H69.0345V25.2918Z"
                    fill="#292929"
                  />
                </svg>
              </div>
              <div>
                <svg
                  width="100"
                  height="32"
                  viewBox="0 0 168 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M52.7375 19.7835C54.2203 23.7949 56.1074 28.6724 58.5338 31.9544H45.5034C45.5484 30.5413 45.099 28.6268 44.5149 26.5299L39.8869 13.037C39.0781 10.849 38.3143 8.93447 37.5504 7.24786L27.7103 31.9088H26.4073L24.7448 28.9003V28.8547L15.8931 12.5356C14.7249 10.6211 13.7364 8.88889 12.658 7.15669L7.31107 25.2991C6.77188 27.5783 6.18776 30.0855 6.45736 31.9544L0.795898 32C1.64961 30.4501 2.77292 27.4416 3.49183 25.2991L10.3215 3.78348C9.42288 2.59829 8.38944 1.36752 7.2212 0.0455829H19.5776C20.6559 2.64388 21.6444 4.64957 22.8127 6.97436L29.3278 19.0085L36.1575 4.19373C35.2589 2.41596 34.4501 1.04843 33.7761 0.0455829H46.1774C46.9413 3.69231 47.6602 5.97151 48.6038 8.66097L52.7375 19.7835Z"
                    fill="#292929"
                  />
                  <path
                    d="M62.1491 31.9544C64.7102 29.584 67.6308 25.4815 69.6977 22.245C73.427 16.2735 77.1115 10.2564 80.8409 4.23932C78.9986 2.41596 76.797 0.820513 74.5054 0.273503V0.0455829H90.5911L102.633 18.6439L104.835 22.1083C107.126 25.7094 110.766 30.8604 112.608 31.9544H96.3425C97.1962 30.906 96.2077 28.3989 95.309 26.5299L92.7928 22.2906H73.6966L70.6862 27.3504C69.7875 28.9915 69.3382 30.5413 69.9223 31.9544H62.1491ZM74.9098 20.1937H91.5347L85.4689 10.0741C84.8848 9.16239 84.031 7.88604 82.9976 6.60969L74.9098 20.1937Z"
                    fill="#292929"
                  />
                  <path
                    d="M156.331 22.7464C159.521 25.7094 163.79 29.4929 167.384 31.9544H165.452C165.317 31.9544 154.219 31.9544 151.119 31.9544H147.749C147.749 28.8547 142.177 22.9288 140.739 21.4701L137.549 18.2792L127.305 28.5812C126.136 29.9031 125.373 31.1795 125.642 31.9544H118.138C121.463 29.5385 124.114 27.3048 126.047 25.5727L135.437 16.0912L132.921 13.584C132.921 13.584 124.249 4.60399 117.554 0H136.74C136.74 2.18803 139.661 5.74359 141.863 8.11396L144.334 10.6211L146.131 12.4444L154.354 4.33049C155.971 2.68946 157.364 1.00285 157.05 0.0455829H164.553C160.734 2.82621 157.724 5.37892 155.657 7.24786L148.243 14.5869L156.331 22.7464Z"
                    fill="#292929"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="max-w-[1440px] mx-auto flex md:flex-row flex-col items-center justify-between">
          {/* Facts */}
          <div>
            <h2 className="md:text-h2 text-h5 text-blue text-center font-bold">
              Fun Facts
            </h2>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <div className="flex flex-col items-start">
                <h6 className="text-pr uppercase text-blue">Favorite Food</h6>
                <p className="text-pr">Pad Thai</p>
              </div>
              <div className="flex flex-col items-start">
                <h6 className="text-pr uppercase text-blue">
                  Current Obssession
                </h6>
                <p className="text-pr">Homemade SourDough</p>
              </div>
              <div className="flex flex-col items-start">
                <h6 className="text-pr uppercase text-blue">
                  Favorite Cocktail
                </h6>
                <p className="text-pr">Negroni</p>
              </div>
              <div className="flex flex-col items-start">
                <h6 className="text-pr uppercase text-blue">
                  Currently Reading
                </h6>
                <p className="text-pr">A court of Thorn & Roses</p>
              </div>
              <div className="flex flex-col items-start">
                <h6 className="text-pr uppercase text-blue">
                  Favorite Restaurant
                </h6>
                <p className="text-pr">Helena's in Miami</p>
              </div>
              <div className="flex flex-col items-start">
                <h6 className="text-pr uppercase text-blue">
                  Bucket List Destination
                </h6>
                <p className="text-pr">Tokyo</p>
              </div>
            </div>
          </div>
          {/* Photo */}
          <div>
            <img
              src="/Image.png"
              alt=""
              className="md:w-[720px] md:h-[750px] w-[400px] h-[450px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
