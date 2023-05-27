<template>
  <div class="page-background">
    <div class="bread-crumbs container">
      <bread-crumbs :bread-crumbs="breadCrumbsCartOrder"/>
    </div>

    <div class="flex container flex-between" v-if="!mobileCartAddress">
      <article v-if="windowWidth <= 768" class="right-art">
        <svg fill="none" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1329_6019)">
            <path
              d="M20.0007 5C19.5759 5.00047 19.1673 5.16313 18.8584 5.45475C18.5495 5.74636 18.3636 6.14492 18.3387 6.56899C18.3138 6.99306 18.4518 7.41063 18.7244 7.73639C18.9971 8.06214 19.3838 8.27149 19.8057 8.32167L20.0007 8.33333H28.334C28.7422 8.33339 29.1362 8.48326 29.4413 8.75453C29.7463 9.02579 29.9412 9.39958 29.989 9.805L30.0007 10V30C30.0006 30.4082 29.8507 30.8022 29.5795 31.1073C29.3082 31.4123 28.9344 31.6072 28.529 31.655L28.334 31.6667H20.834C20.4092 31.6671 20.0006 31.8298 19.6917 32.1214C19.3828 32.413 19.1969 32.8116 19.172 33.2357C19.1471 33.6597 19.2851 34.0773 19.5578 34.4031C19.8304 34.7288 20.2172 34.9382 20.639 34.9883L20.834 35H28.334C29.6093 35.0001 30.8365 34.5128 31.7644 33.6379C32.6923 32.7629 33.2508 31.5665 33.3257 30.2933L33.334 30V10C33.3341 8.72465 32.8468 7.49748 31.9718 6.56957C31.0969 5.64166 29.9005 5.08315 28.6273 5.00833L28.334 5H20.0007ZM16.179 14.1067C15.8791 13.8078 15.4766 13.6342 15.0533 13.6213C14.6301 13.6084 14.2178 13.757 13.9002 14.0371C13.5826 14.3171 13.3835 14.7076 13.3433 15.1291C13.3032 15.5507 13.425 15.9717 13.684 16.3067L13.8223 16.465L15.6907 18.3333H6.66732C6.24252 18.3338 5.83393 18.4965 5.52504 18.7881C5.21615 19.0797 5.03026 19.4783 5.00537 19.9023C4.98047 20.3264 5.11844 20.744 5.39109 21.0697C5.66374 21.3955 6.05049 21.6048 6.47232 21.655L6.66732 21.6667H15.6907L13.8223 23.535C13.5202 23.8342 13.3439 24.2376 13.3295 24.6626C13.3151 25.0875 13.4636 25.5019 13.7448 25.821C14.0259 26.14 14.4183 26.3395 14.8417 26.3787C15.2651 26.4178 15.6874 26.2937 16.0223 26.0317L16.179 25.8933L20.894 21.1783C21.1809 20.8913 21.3533 20.5095 21.3788 20.1045C21.4043 19.6994 21.2811 19.299 21.0323 18.9783L20.894 18.8217L16.179 14.1067Z"
              fill="#00A689"/>
          </g>
          <defs>
            <clipPath id="clip0_1329_6019">
              <rect fill="white" height="40" transform="matrix(-1 0 0 1 40 0)" width="40"/>
            </clipPath>
          </defs>
        </svg>

        <p>
          <b>
            Если у вас уже есть аккаунт, вы можете авторизироваться
          </b>
        </p>
      </article>

      <main class="flex-column">
        <h1>Оформление заказа</h1>

        <section>
          <h3><b>Данные получателя</b></h3>
          <div class="flex-wrap">
            <input class="input" v-model="form.first_name" name="first_name" placeholder="Имя" required type="text">
            <input class="input" v-model="form.email" name="email" placeholder="Email" required type="email">
            <input class="input" v-model="form.last_name" name="last_name" placeholder="Фамилия" required type="text">
            <input class="input" v-model="form.tel" name="tel" v-mask="'+7 (###) ###-##-##'"  placeholder="Телефон" required type="tel">
          </div>
        </section>

        <section>
          <h3><b>Доставка</b></h3>
          <div class="city">
            <span class="green">г. Липецк</span>
            <span @click="openCartAddress">Изменить город доставки</span>
          </div>
          <div class="flex-column">
            <article
              :class="{'active-block' : item.id === deliveryId}"
              v-for="(item, id) in payments" :key="`deliver_${id}`"
              @click="deliveryId = item.id"
            >
              <div class="title">
                <div class="icon" v-html="item.icon"></div>
                <h6><b>{{ item.title }}</b></h6>
              </div>
              <div class="flex-align-center">
                <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                  <mask id="path-1-inside-1_1327_5686" fill="white">
                    <path
                      d="M10 9.55C9.43168 9.55 8.88663 9.31295 8.48477 8.89099C8.08291 8.46903 7.85714 7.89674 7.85714 7.3C7.85714 6.70326 8.08291 6.13097 8.48477 5.70901C8.88663 5.28705 9.43168 5.05 10 5.05C10.5683 5.05 11.1134 5.28705 11.5152 5.70901C11.9171 6.13097 12.1429 6.70326 12.1429 7.3C12.1429 7.59547 12.0874 7.88806 11.9797 8.16104C11.8721 8.43402 11.7142 8.68206 11.5152 8.89099C11.3162 9.09992 11.08 9.26566 10.82 9.37873C10.5601 9.4918 10.2814 9.55 10 9.55ZM10 1C8.4087 1 6.88258 1.66375 5.75736 2.84523C4.63214 4.02671 4 5.62914 4 7.3C4 12.025 10 19 10 19C10 19 16 12.025 16 7.3C16 5.62914 15.3679 4.02671 14.2426 2.84523C13.1174 1.66375 11.5913 1 10 1Z"/>
                  </mask>
                  <path
                    d="M10 9.55C9.43168 9.55 8.88663 9.31295 8.48477 8.89099C8.08291 8.46903 7.85714 7.89674 7.85714 7.3C7.85714 6.70326 8.08291 6.13097 8.48477 5.70901C8.88663 5.28705 9.43168 5.05 10 5.05C10.5683 5.05 11.1134 5.28705 11.5152 5.70901C11.9171 6.13097 12.1429 6.70326 12.1429 7.3C12.1429 7.59547 12.0874 7.88806 11.9797 8.16104C11.8721 8.43402 11.7142 8.68206 11.5152 8.89099C11.3162 9.09992 11.08 9.26566 10.82 9.37873C10.5601 9.4918 10.2814 9.55 10 9.55ZM10 1C8.4087 1 6.88258 1.66375 5.75736 2.84523C4.63214 4.02671 4 5.62914 4 7.3C4 12.025 10 19 10 19C10 19 16 12.025 16 7.3C16 5.62914 15.3679 4.02671 14.2426 2.84523C13.1174 1.66375 11.5913 1 10 1Z"
                    fill="#8A928F"/>
                  <path
                    d="M10 5.05V4.05V5.05ZM4 7.3H3H4ZM10 19L9.2419 19.6521L10 20.5334L10.7581 19.6521L10 19ZM10 8.55C9.71308 8.55 9.42742 8.43077 9.20891 8.20133L7.76063 9.58065C8.34585 10.1951 9.15028 10.55 10 10.55V8.55ZM9.20891 8.20133C8.98882 7.97024 8.85714 7.64684 8.85714 7.3H6.85714C6.85714 8.14664 7.177 8.96783 7.76063 9.58065L9.20891 8.20133ZM8.85714 7.3C8.85714 6.95316 8.98882 6.62976 9.20891 6.39866L7.76063 5.01935C7.177 5.63217 6.85714 6.45336 6.85714 7.3H8.85714ZM9.20891 6.39866C9.42742 6.16923 9.71308 6.05 10 6.05V4.05C9.15028 4.05 8.34585 4.40488 7.76063 5.01935L9.20891 6.39866ZM10 6.05C10.2869 6.05 10.5726 6.16923 10.7911 6.39866L12.2394 5.01935C11.6542 4.40488 10.8497 4.05 10 4.05V6.05ZM10.7911 6.39866C11.0112 6.62976 11.1429 6.95316 11.1429 7.3H13.1429C13.1429 6.45336 12.823 5.63217 12.2394 5.01935L10.7911 6.39866ZM11.1429 7.3C11.1429 7.47074 11.1108 7.63876 11.0495 7.79407L12.91 8.52801C13.0641 8.13735 13.1429 7.72021 13.1429 7.3H11.1429ZM11.0495 7.79407C10.9883 7.94932 10.8997 8.08731 10.7911 8.20133L12.2394 9.58065C12.5287 9.27681 12.7558 8.91872 12.91 8.52801L11.0495 7.79407ZM10.7911 8.20133C10.6826 8.31526 10.5564 8.40289 10.4212 8.46171L11.2189 10.2958C11.6036 10.1284 11.9499 9.88458 12.2394 9.58065L10.7911 8.20133ZM10.4212 8.46171C10.2861 8.52047 10.1431 8.55 10 8.55V10.55C10.4197 10.55 10.834 10.4631 11.2189 10.2958L10.4212 8.46171ZM10 0C8.12731 0 6.34179 0.781573 5.03322 2.15557L6.4815 3.53488C7.42336 2.54592 8.6901 2 10 2V0ZM5.03322 2.15557C3.72623 3.52791 3 5.37924 3 7.3H5C5 5.87904 5.53805 4.5255 6.4815 3.53488L5.03322 2.15557ZM3 7.3C3 8.67398 3.43106 10.1389 4.01772 11.5139C4.60958 12.9011 5.39069 14.2672 6.15871 15.4625C6.92846 16.6604 7.6964 17.7041 8.2713 18.4479C8.55916 18.8203 8.79964 19.1188 8.96911 19.3254C9.05387 19.4287 9.12094 19.5091 9.16737 19.5643C9.19059 19.5919 9.20865 19.6132 9.22119 19.6279C9.22746 19.6353 9.23236 19.641 9.23582 19.645C9.23755 19.6471 9.23893 19.6487 9.23994 19.6499C9.24045 19.6505 9.24087 19.6509 9.24119 19.6513C9.24136 19.6515 9.24153 19.6517 9.24161 19.6518C9.24177 19.652 9.2419 19.6521 10 19C10.7581 18.3479 10.7582 18.348 10.7582 18.348C10.7582 18.348 10.7583 18.3481 10.7583 18.348C10.7582 18.348 10.7581 18.3478 10.7579 18.3476C10.7574 18.3471 10.7566 18.3461 10.7555 18.3448C10.7532 18.3421 10.7495 18.3378 10.7444 18.3318C10.7342 18.3198 10.7186 18.3014 10.6979 18.2768C10.6564 18.2275 10.5946 18.1534 10.5153 18.0567C10.3566 17.8634 10.1283 17.5801 9.8537 17.2248C9.3036 16.5131 8.57154 15.5177 7.84129 14.3813C7.10931 13.2421 6.39042 11.9786 5.85728 10.729C5.31894 9.46731 5 8.28852 5 7.3H3ZM10 19C10.7581 19.6521 10.7582 19.652 10.7584 19.6518C10.7585 19.6517 10.7586 19.6515 10.7588 19.6513C10.7591 19.6509 10.7595 19.6505 10.7601 19.6499C10.7611 19.6487 10.7624 19.6471 10.7642 19.645C10.7676 19.641 10.7725 19.6353 10.7788 19.6279C10.7913 19.6132 10.8094 19.5919 10.8326 19.5643C10.8791 19.5091 10.9461 19.4287 11.0309 19.3254C11.2004 19.1188 11.4408 18.8203 11.7287 18.4479C12.3036 17.7041 13.0715 16.6604 13.8413 15.4625C14.6093 14.2672 15.3904 12.9011 15.9823 11.5139C16.5689 10.1389 17 8.67398 17 7.3H15C15 8.28852 14.6811 9.46731 14.1427 10.729C13.6096 11.9786 12.8907 13.2421 12.1587 14.3813C11.4285 15.5177 10.6964 16.5131 10.1463 17.2248C9.87166 17.5801 9.64339 17.8634 9.48474 18.0567C9.40544 18.1534 9.3436 18.2275 9.30214 18.2768C9.28141 18.3014 9.26578 18.3198 9.25562 18.3318C9.25054 18.3378 9.24682 18.3421 9.24452 18.3448C9.24337 18.3461 9.24257 18.3471 9.24213 18.3476C9.24191 18.3478 9.24178 18.348 9.24174 18.348C9.24172 18.3481 9.24176 18.348 9.24175 18.348C9.24181 18.348 9.2419 18.3479 10 19ZM17 7.3C17 5.37924 16.2738 3.52791 14.9668 2.15557L13.5185 3.53488C14.4619 4.5255 15 5.87904 15 7.3H17ZM14.9668 2.15557C13.6582 0.781573 11.8727 0 10 0V2C11.3099 2 12.5766 2.54592 13.5185 3.53488L14.9668 2.15557Z"
                    fill="#8A928F" mask="url(#path-1-inside-1_1327_5686)"/>
                </svg>
                <span>{{ item.address }}</span>
              </div>
              <div class="flex-align-center">
                <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10 3C6.15 3 3 6.15 3 10C3 13.85 6.15 17 10 17C13.85 17 17 13.85 17 10C17 6.15 13.85 3 10 3ZM13.5 10.7H9.3V6.5H10.35V9.65H13.5V10.7Z"
                    fill="#8A928F"/>
                </svg>
                <span>{{ item.time }}</span>
              </div>
              <span class="btn">Изменить</span>
            </article>
          </div>
        </section>

        <section>
          <h3><b>Способ оплаты</b></h3>
          <article class="active-block payment">
            <div class="title">
              <svg fill="none" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3 18.6154L7.70239 13.2728C8.33107 12.5581 9.10249 11.986 9.96584 11.5943C10.8292 11.2026 11.7649 11 12.7114 11H13.0514M3 33H12.2138L18.9148 27.9231C18.9148 27.9231 20.2717 26.9974 22.2652 25.3846C26.4533 22 22.2652 16.6422 18.0771 19.4615C14.6664 21.758 11.3762 23.6923 11.3762 23.6923"
                  stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                <path
                  d="M13 22.45V11.4C13 10.4983 13.3612 9.63346 14.0042 8.99584C14.6472 8.35821 15.5193 8 16.4286 8H33.5714C34.4807 8 35.3528 8.35821 35.9958 8.99584C36.6388 9.63346 37 10.4983 37 11.4V21.6C37 22.5017 36.6388 23.3665 35.9958 24.0042C35.3528 24.6418 34.4807 25 33.5714 25H22.4286"
                  stroke="black" stroke-width="1.5"/>
                <path
                  d="M32.9822 16.5175L33 16.4982M17 16.5175L17.0178 16.4982M24.9911 20C24.0492 20 23.1458 19.6313 22.4798 18.9749C21.8137 18.3185 21.4395 17.4283 21.4395 16.5C21.4395 15.5717 21.8137 14.6815 22.4798 14.0251C23.1458 13.3687 24.0492 13 24.9911 13C25.9331 13 26.8364 13.3687 27.5025 14.0251C28.1685 14.6815 28.5427 15.5717 28.5427 16.5C28.5427 17.4283 28.1685 18.3185 27.5025 18.9749C26.8364 19.6313 25.9331 20 24.9911 20Z"
                  stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
              </svg>
              <h6><b>При получении</b></h6>
            </div>
            <p>Оплата наличными или картой при получении</p>
          </article>
        </section>

        <section>
          <h3><b>Бонусные баллы</b></h3>
          <article :class="{'active-block' : bonus}" @click="bonus = !bonus">
            <div class="title">
              <svg fill="none" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17.1472 35.0754H22.854C23.17 35.0754 23.4262 34.8348 23.4262 34.5364V14.1334C23.4262 13.8351 23.17 13.5944 22.854 13.5944H17.1472C16.8312 13.5944 16.5751 13.8351 16.5751 14.1334V34.5364C16.5751 34.8348 16.8312 35.0754 17.1472 35.0754Z"
                  fill="#0B0B0B"/>
                <path
                  d="M15.6602 34.1771H6.94954C6.67177 34.1771 6.44556 33.9529 6.44556 33.6777V15.6777C6.44556 15.4025 6.67177 15.1783 6.94954 15.1783H15.6602V14.2801H6.66678C6.04471 14.2801 5.53906 14.7795 5.53906 15.3975V33.9563C5.53906 34.5727 6.04304 35.0738 6.66678 35.0738H15.6602V34.1755V34.1771Z"
                  fill="#0B0B0B"/>
                <path
                  d="M33.3344 14.2817H24.341V15.18H33.0517C33.3294 15.18 33.5556 15.4041 33.5556 15.6794V33.6793C33.5556 33.9546 33.3294 34.1788 33.0517 34.1788H24.341V35.077H33.3344C33.9565 35.077 34.4621 34.5777 34.4621 33.9596V15.4009C34.4621 14.7844 33.9582 14.2834 33.3344 14.2834V14.2817Z"
                  fill="#0B0B0B"/>
                <path
                  d="M15.77 13.3851C15.9596 12.978 16.3738 12.6928 16.8561 12.6928H19.3827L12.0558 4.91172C11.7016 4.53593 11.1061 4.51449 10.7269 4.86556L7.0227 8.29052C6.64347 8.64159 6.62184 9.23164 6.97613 9.60743L10.5323 13.3834H15.77V13.3851Z"
                  fill="#0B0B0B"/>
                <path
                  d="M24.2312 13.3851C24.0416 12.978 23.6274 12.6928 23.1451 12.6928H20.6185L27.9453 4.91172C28.2996 4.53593 28.8951 4.51449 29.2743 4.86556L32.9785 8.29052C33.3577 8.64159 33.3793 9.23164 33.025 9.60743L29.4689 13.3834H24.2312V13.3851Z"
                  fill="#0B0B0B"/>
              </svg>

              <h6><b>Использовать для оплаты бонусные баллы</b></h6>
            </div>
            <p>Для списания доступно 1245 бонусов</p>
          </article>
        </section>
      </main>

      <div class="right flex-column">
        <aside>
          <h3><b>Детали заказа</b></h3>
          <span class="title">4 позиции в заказе</span>
          <div class="flex-column">
            <div class="order-item">
              <span>Жидкость Hangsen Salt Strawberry Watermelon 30 мл</span>
              <span class="min">250 ₽ — 2 шт.</span>
            </div>
          </div>
          <div class="flex-column">
            <div class="order-item">
              <span>Жидкость Hangsen Salt Strawberry Watermelon 30 мл</span>
              <span class="min">250 ₽ — 2 шт.</span>
            </div>
          </div>
          <div class="gift-wrap flex-align-center">
            <svg fill="none" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17.1472 35.0754H22.854C23.17 35.0754 23.4262 34.8348 23.4262 34.5364V14.1334C23.4262 13.8351 23.17 13.5944 22.854 13.5944H17.1472C16.8312 13.5944 16.5751 13.8351 16.5751 14.1334V34.5364C16.5751 34.8348 16.8312 35.0754 17.1472 35.0754Z"
                fill="#00A689"/>
              <path
                d="M15.6602 34.1771H6.94954C6.67177 34.1771 6.44556 33.9529 6.44556 33.6777V15.6777C6.44556 15.4025 6.67177 15.1783 6.94954 15.1783H15.6602V14.2801H6.66678C6.04471 14.2801 5.53906 14.7795 5.53906 15.3975V33.9563C5.53906 34.5727 6.04304 35.0738 6.66678 35.0738H15.6602V34.1755V34.1771Z"
                fill="#00A689"/>
              <path
                d="M33.3344 14.2817H24.341V15.18H33.0517C33.3294 15.18 33.5556 15.4041 33.5556 15.6794V33.6793C33.5556 33.9546 33.3294 34.1788 33.0517 34.1788H24.341V35.077H33.3344C33.9565 35.077 34.4621 34.5777 34.4621 33.9596V15.4009C34.4621 14.7844 33.9582 14.2834 33.3344 14.2834V14.2817Z"
                fill="#00A689"/>
              <path
                d="M15.77 13.3851C15.9596 12.978 16.3738 12.6928 16.8561 12.6928H19.3827L12.0558 4.91172C11.7016 4.53593 11.1061 4.51449 10.7269 4.86556L7.0227 8.29052C6.64347 8.64159 6.62184 9.23164 6.97613 9.60743L10.5323 13.3834H15.77V13.3851Z"
                fill="#00A689"/>
              <path
                d="M24.2312 13.3851C24.0416 12.978 23.6274 12.6928 23.1451 12.6928H20.6185L27.9453 4.91172C28.2996 4.53593 28.8951 4.51449 29.2743 4.86556L32.9785 8.29052C33.3577 8.64159 33.3793 9.23164 33.025 9.60743L29.4689 13.3834H24.2312V13.3851Z"
                fill="#00A689"/>
            </svg>
            <span>Бонусы для списания:</span>
            <span><b>1245</b></span>
          </div>
          <div class="total flex-column">
            <div class="flex-align-center flex-between">
              <span><b>Итого</b></span>
              <span><b>4995 ₽</b></span>
            </div>
            <span>+185 бонусов</span>
          </div>
          <button class="btn-green">Оформить заказ</button>
          <div class="custom-checkbox" @click="checkbox = !checkbox">
            <div :class="{'active-checkbox' : checkbox}" class="checkbox">
              <svg fill="none" height="14" viewBox="0 0 17 14" width="17" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 7.5L6 12L16 1" stroke="white" stroke-width="2"/>
              </svg>
            </div>
            <span>Согласен с условиями обработки персональных данных</span>
          </div>
        </aside>
        <article v-if="windowWidth > 768" class="right-art">
          <svg fill="none" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1329_6019)">
              <path
                d="M20.0007 5C19.5759 5.00047 19.1673 5.16313 18.8584 5.45475C18.5495 5.74636 18.3636 6.14492 18.3387 6.56899C18.3138 6.99306 18.4518 7.41063 18.7244 7.73639C18.9971 8.06214 19.3838 8.27149 19.8057 8.32167L20.0007 8.33333H28.334C28.7422 8.33339 29.1362 8.48326 29.4413 8.75453C29.7463 9.02579 29.9412 9.39958 29.989 9.805L30.0007 10V30C30.0006 30.4082 29.8507 30.8022 29.5795 31.1073C29.3082 31.4123 28.9344 31.6072 28.529 31.655L28.334 31.6667H20.834C20.4092 31.6671 20.0006 31.8298 19.6917 32.1214C19.3828 32.413 19.1969 32.8116 19.172 33.2357C19.1471 33.6597 19.2851 34.0773 19.5578 34.4031C19.8304 34.7288 20.2172 34.9382 20.639 34.9883L20.834 35H28.334C29.6093 35.0001 30.8365 34.5128 31.7644 33.6379C32.6923 32.7629 33.2508 31.5665 33.3257 30.2933L33.334 30V10C33.3341 8.72465 32.8468 7.49748 31.9718 6.56957C31.0969 5.64166 29.9005 5.08315 28.6273 5.00833L28.334 5H20.0007ZM16.179 14.1067C15.8791 13.8078 15.4766 13.6342 15.0533 13.6213C14.6301 13.6084 14.2178 13.757 13.9002 14.0371C13.5826 14.3171 13.3835 14.7076 13.3433 15.1291C13.3032 15.5507 13.425 15.9717 13.684 16.3067L13.8223 16.465L15.6907 18.3333H6.66732C6.24252 18.3338 5.83393 18.4965 5.52504 18.7881C5.21615 19.0797 5.03026 19.4783 5.00537 19.9023C4.98047 20.3264 5.11844 20.744 5.39109 21.0697C5.66374 21.3955 6.05049 21.6048 6.47232 21.655L6.66732 21.6667H15.6907L13.8223 23.535C13.5202 23.8342 13.3439 24.2376 13.3295 24.6626C13.3151 25.0875 13.4636 25.5019 13.7448 25.821C14.0259 26.14 14.4183 26.3395 14.8417 26.3787C15.2651 26.4178 15.6874 26.2937 16.0223 26.0317L16.179 25.8933L20.894 21.1783C21.1809 20.8913 21.3533 20.5095 21.3788 20.1045C21.4043 19.6994 21.2811 19.299 21.0323 18.9783L20.894 18.8217L16.179 14.1067Z"
                fill="#00A689"/>
            </g>
            <defs>
              <clipPath id="clip0_1329_6019">
                <rect fill="white" height="40" transform="matrix(-1 0 0 1 40 0)" width="40"/>
              </clipPath>
            </defs>
          </svg>

          <p>
            <b>
              Если у вас уже есть аккаунт, вы можете авторизироваться
            </b>
          </p>
        </article>
      </div>
    </div>

    <cart-address v-if="cartAddress" @closeCartModal="cartAddress = false"/>

    <div class="container" v-if="mobileCartAddress && windowWidth <= 768">
      <form>
        <h3><b>Адрес доставки</b></h3>
        <span>Для доставки доступны 2 товара из 4</span>

        <div class="flex-wrap">
          <input class="input" type="text" required placeholder="Улица, дом">
          <input class="input" type="text" required placeholder="Подъезд">
          <input class="input" type="text" required placeholder="Этаж">
          <input class="input" type="text" required placeholder="Квартира">
        </div>

        <textarea class="input" placeholder="Комментарий к заказу"/>

        <button class="btn-green" type="submit">Сохранить</button>
      </form>

    </div>
  </div>
</template>

<script>
import BreadCrumbs from "../../components/BreadCrumbs";
import clientData from "../../mixins/clientData";
import CartAddress from "../../components/Modals/CartAddress";

export default {
  name: "order",
  components: {CartAddress, BreadCrumbs},
  mixins: [clientData],
  data() {
    return {
      breadCrumbsCartOrder: [
        {
          url: '/',
          title: 'Главная',
        },
        {
          url: '/cart',
          title: 'Корзина',
        },
        {
          url: this.$route.fullPath,
          title: 'Оформление заказа',
        },
      ],
      sectionInfo: {
        url: this.$route.fullPath,
        title: 'Корзина'
      },

      checkbox: false,
      cartAddress: false,
      mobileCartAddress: false,

      form: {
        first_name: '',
        last_name: '',
        email: '',
        tel: ''
      },

      payments: [
        {
          id: 0,
          title: 'Доставка CDEK',
          address: 'ул. Гагарина, 76, Липецк',
          time: 'пн-пт 10:00:00 – 20:00:00; сб-вс 10:00:00 – 18:00:00',
          icon: require('@/assets/img/car-delivery.svg?raw'),
        },
        {
          id: 1,
          title: 'Доставка Почтой России',
          address: 'ул. Зегеля, 2, Липецк',
          time: 'пн-пт 08:00 – 21:00; сб-вс 09:00 – 20:00',
          icon: require('@/assets/img/doc-del.svg?raw'),
        },
        {
          id: 2,
          title: 'Забрать из магазина',
          address: 'ул. Плеханова, 65, Липецк ',
          time: '10:00-22:00',
          icon: require('@/assets/img/gift-get.svg?raw'),
        },
      ],

      bonus: true,
      paymentId: 0,
      deliveryId: 0,
    }
  },
  methods: {
    openCartAddress(){
      this.windowWidth > 768 ? this.cartAddress = true : this.mobileCartAddress = true
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style lang="scss" scoped>

.flex.container.flex-between {
  gap: rem(20);

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
}

.page-background {
  padding-bottom: rem(180);

  @media screen and (max-width: 768px) {
    padding-bottom: rem(32);
  }
}

main {
  background: #FFFFFF;
  box-shadow: 4px 4px 8px 4px rgba(69, 99, 86, 0.3);
  border-radius: 10px;
  padding: rem(40) rem(60) rem(50);
  width: rem(876);

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: rem(20) rem(30) rem(30);
    box-shadow: 4px 4px 8px rgba(69, 99, 86, 0.3);
  }

  * {
    color: $black;
  }

  h1 {
    @include style-font(24, 750, 140%, false);
    margin-bottom: rem(30);
    text-transform: uppercase;

    @media screen and (max-width: 768px){
      margin-bottom: rem(25);
    }
  }

  section {
    margin-bottom: rem(50);
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 768px) {
      margin-bottom: rem(20);
    }

    &:nth-child(4) {
      width: rem(368);
      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }

    &:last-child article {
      width: rem(591);
      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }

    .flex-column, .flex-wrap {
      gap: rem(20);
    }
  }

  h3 {
    @include style-font(20);
    margin-bottom: rem(30);

    @media screen and (max-width: 768px) {
      @include style-font();
      margin-bottom: rem(15);
    }
  }

  .city {
    margin-right: auto;
    margin-bottom: rem(20);
    border: 1px solid #B4B7B6;
    box-shadow: 0 2px 6px 2px rgba(77, 102, 91, 0.3);
    border-radius: 40px;
    padding: rem(5) rem(20) rem(8);
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
      width: 100%;
      flex-direction: column !important;
      align-items: flex-start;
      border-radius: 10px;
      gap: rem(10);
    }

    span {
      @include style-font(16);
      color: rgba(138, 146, 143, 1);
      cursor: pointer;
    }

    .green {
      @include style-font();
      color: $green;
      margin-right: rem(10);
      cursor: default;

      @media screen and (max-width: 768px) {
        margin-right: 0;
      }
    }
  }

  article {
    width: 100%;
    border: 2px solid #B4B7B6;
    box-shadow: 4px 4px 8px 4px rgba(69, 99, 86, 0.3);
    border-radius: 10px;
    padding: rem(30) rem(20) rem(20) rem(40);
    transition: .25s;
    cursor: pointer;

    @media screen and (max-width: 768px) {
      padding: rem(10) rem(20);
    }

    &:hover {
      border-color: $green;
    }

    .title {
      display: flex;
      align-items: center;
      gap: rem(8);
      margin-bottom: rem(10);

      .icon:deep svg {
        width: rem(40);
        height: rem(40);
      }

      svg {
        width: rem(40);
        height: rem(40);
      }

      h6 {
        @include style-font(16);

        @media screen and (max-width: 768px) {
          max-width: 80%;
        }
      }
    }

    .flex-align-center  {
      margin-bottom: rem(4);

      @media screen and (max-width: 768px) {
        margin-bottom: rem(10);
      }

      svg {
        width: rem(20);
        height: rem(20);
        margin-right: rem(10);
      }

      span {
        @include style-font(16);

        @media screen and (max-width: 768px) {
          @include style-font(14);
          max-width: 85%;
        }
      }
    }

    .btn {
      color: rgba(138, 146, 143, 1);
      @include style-font(16);
    }

    p {
      color: rgba(138, 146, 143, 1);
      @include style-font(16);
    }
  }

  .payment .title{
    @media screen and (max-width: 768px){
      margin-bottom: 0;
    }
  }

  input {
    width: 48%;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
}

.active-block {
  border-color: $green;
}

aside, .right-art {
  background: #FFFFFF;
  box-shadow: 4px 4px 8px 4px rgba(69, 99, 86, 0.3);
  border-radius: 10px;
}

.right-art {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: rem(10);
  padding: rem(30) rem(40);

  @media screen and (max-width: 768px) {
    padding: rem(14) rem(20) rem(20);
    margin-bottom: rem(10);
  }

  p {
    @include style-font(16, 400, 120%);

    @media screen and (max-width: 768px) {
      @include style-font(14, 400, 120%);
      width: 80%;
    }
  }

  svg {
    width: rem(40);
    height: rem(40);
  }
}

.right {
  flex: 1;
  gap: rem(20);

  * {
    color: $black;
  }

  aside {
    padding: rem(30) rem(40);
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 768px) {
      padding: rem(20) rem(30);
    }
  }

  h3 {
    @include style-font(20);
    margin-bottom: rem(30);

    @media screen and (max-width: 768px) {
      @include style-font();
      margin-bottom: rem(10);
    }
  }

  span.title {
    color: rgba(138, 146, 143, 1);
    @include style-font();
    margin-bottom: rem(10);

    @media screen and (max-width: 768px) {
      @include style-font(16);
      margin-bottom: rem(10);
    }
  }

  .order-item {
    display: flex;
    flex-direction: column;
    margin-bottom: rem(10);
    gap: rem(4);

    span {
      @include style-font();

      @media screen and (max-width: 768px) {
        @include style-font(16);
      }
    }

    .min {
      @include style-font(16);
      color: rgba(138, 146, 143, 1);
    }
  }

  .gift-wrap {
    padding-top: rem(24);
    margin: rem(30) 0;
    border-top: 1px solid #B4B7B6;
    gap: rem(4);

    @media screen and (max-width: 768px) {
      padding-top: rem(8);
      margin: rem(10) 0;
    }

    svg {
      width: rem(40);
      height: rem(40);
    }

    span {
      @include style-font(16);
      color: rgba(138, 146, 143, 1);
    }
  }

  .total {
    padding: rem(20) 0 rem(10);
    border-top: 1px solid #B4B7B6;
    margin-bottom: rem(30);

    @media screen and (max-width: 768px) {
      padding: rem(10) 0 0 0;
      margin-bottom: rem(25);
    }

    span {
      @include style-font(14);
      margin-top: rem(10);
      color: rgba(138, 146, 143, 1);
      margin-left: auto;

      @media screen and (max-width: 768px){
        margin-top: rem(5);
      }
    }

    .flex-align-center.flex-between span {
      @include style-font(20);
      margin-top: 0;
      margin-left: 0;
      color: $black;

      @media screen and (max-width: 768px) {
        @include style-font();
      }
    }


  }

  button {
    color: #FFFFFF;
    margin-bottom: rem(20);

    @media screen and (max-width: 768px) {
      margin-bottom: rem(15);
    }
  }
}

.custom-checkbox {
  span {
    color: rgba(138, 146, 143, 1);
    width: 87%;

    @media screen and (max-width: 768px) {
      @include style-font(14);
    }
  }
}

form {
  background: #FFFFFF;
  box-shadow: 4px 4px 8px rgba(69, 99, 86, 0.3);
  border-radius: 10px;
  padding: rem(30) rem(60) rem(50);
  position: relative;

  @media screen and (max-width: 768px){
    padding: rem(20) rem(30) rem(30);
  }

  * {
    color: $black;
  }

  h3 {
    @include style-font(20);
    margin-bottom: rem(10);

    @media screen and (max-width: 768px){
      @include style-font();
    }
  }

  span {
    display: block;
    @include style-font();
    color: rgba(138, 146, 143, 1);
    margin-bottom: rem(30);

    @media screen and (max-width: 768px){
      @include style-font(16);
      margin-bottom: rem(20);
    }
  }

  .flex-wrap {
    gap: rem(20);
    margin-bottom: rem(30);
  }

  input {
    width: 48%;

    @media screen and (max-width: 768px){
      width: 100%;
    }
  }

  textarea {
    margin-bottom: rem(30);
    overflow: hidden;
  }

  button {
    color: #ffffff;
    width: rem(400);

    @media screen and (max-width: 768px){
      width: 100%;
    }
  }
}

</style>
