<script setup>
import { ref, computed } from "vue";
import SidebarLayout from "@/layouts/SidebarLayout.vue";
import BaseContainer from "@/components/base/BaseContainer.vue";
import BaseForm from "@/components/base/BaseForm.vue";
import BaseInput from "@/components/base/BaseInput.vue";
import BaseImage from "@/components/base/BaseImage.vue";

const items = [
  {
    src: "https://images.pexels.com/photos/797900/pexels-photo-797900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    src: "https://images.pexels.com/photos/1378425/pexels-photo-1378425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    src: "https://images.pexels.com/photos/1378425/pexels-photo-1378425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
  },
];
</script>

<template>
  <SidebarLayout>
    <template v-slot:main>
      <BaseContainer>
        <v-carousel
    hide-delimiters
    show-arrows="hover"
        width="200"
  >
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      cover
      class="carousel-item"
    >
    </v-carousel-item>
  </v-carousel>
        <v-card
          class="mx-auto mt-10"
          prepend-icon="mdi-cash" 
          width="800"
          color="#253C59"
          rounded="lg"
          style="opacity: 0.95"
        >
          <template v-slot:title>
            <span class="font-weight-black">Награден фонд</span>
          </template>

          <v-card-text
            class="bg-surface-light pt-4"
            style="
              display: flex;
              flex-direction: column;
              align-items: center;
              font-family: 'Roboto', sans-serif;
            "
          >
            <ul style="list-style-type: none; padding-left: 0; margin: 0">
              <li
                style="display: flex; align-items: center; margin-bottom: 10px"
              >
                <v-icon color="#debd68" style="margin-right: 8px;">mdi-trophy</v-icon>
                <strong style="color: #debd68; margin-right: 8px;">1-во място: </strong>  500 лв, купа
                и медали
              </li style="display: flex; align-items: center; margin-bottom: 10px;">
              <li style="display: flex; align-items: center; margin-bottom: 10px;">
                <v-icon color="#d8d8d8" style="margin-right: 8px;">mdi-trophy</v-icon>
                <strong style="color: #d8d8d8; margin-right: 8px;">2-ро място: </strong> 250 лв, купа
                и медали
              </li>
              <li style="display: flex; align-items: center; margin-bottom: 10px;">
                <v-icon color="#dc7f64" style="margin-right: 8px;">mdi-trophy</v-icon>
                <strong style="color: #dc7f64; margin-right: 8px;">3-то място: </strong> 100 лв,
                медали
              </li>
              <li style="display: flex; align-items: center; margin-bottom: 10px;">
                <v-icon color="#AFE1AF" style="margin-right: 8px;">mdi-star-circle</v-icon>
                <strong style="color: #AFE1AF; margin-right: 8px;" >Най-добър играч:</strong> статуетка
              </li>
            </ul>
          </v-card-text>
        </v-card>
        <v-card
          class="mx-auto mt-10 card-opacity"
          width="800"
          color="#253C59"
          rounded="lg"
          prepend-icon="mdi-human-greeting"
          style="opacity: 0.95"
        >
          <template v-slot:title>
            <span class="font-weight-black">Как да участвам?</span>
          </template>

          <v-card-text class="bg-surface-light pt-4">
            <div class="step" style="margin-top: 20px; margin-bottom: 20px;">
              <v-icon>mdi-book-open-page-variant</v-icon>
              <p>Прочети правилата на играта, за да бъдеш подготвен за всичко!</p>
            </div>
            <div class="step" style="margin-top: 20px; margin-bottom: 20px;">
              <v-icon>mdi-soccer-field</v-icon>
              <p>Свържи се с нас чрез нашата <a href="https://www.facebook.com/yourpage" target="_blank">фейсбук страница</a> или <a href="https://www.instagram.com/yourprofile" target="_blank">Instagram профил</a>. Ще ти помогнем с всичко, освен с избора на перфектния отбор... това е на теб! 😄</p>
            </div>
            <div class="step" style="margin-top: 20px; margin-bottom: 20px;">
              <v-icon>mdi-tshirt-crew</v-icon>
              <p>Създай или се присъедини към своя неповторим отбор! Избирай внимателно с кого ще излезеш на терена, защото наградите наистина си заслужават!</p>
            </div>
            <div class="step" style="margin-top: 20px; margin-bottom: 20px;">
              <v-icon>mdi-soccer</v-icon>
              <p>След събиране на отборите ще бъде обявена програмата. Ти остава само да се забавляваш и да печелиш!</p>
            </div>
          </v-card-text>
        </v-card>
        <div class="d-flex justify-center mt-10">
          <v-btn color="#253C59" style="opacity: 0.95" @click="dialog = true" 
          >Правила на лигата</v-btn>
          
        <v-btn color="#253C59" style="opacity: 0.95" @click="dialogRules = true" class="ml-4"
          >Спортно-технически правила</v-btn>
        </div>
      

        <v-dialog v-model="dialog" max-width="600">
          <v-card>
            <v-card-title class="rules-title">Правила на лигата</v-card-title>
            <v-card-text class="rules-container">
    <div class="rules-section">
      <h4>Чл.1.</h4>
      <p>Настоящите правила определят условията и реда за провеждане на Аматьорски футболна лига „MatchPro - Лига Дупница“ (Лигата), организиран от „Сепи Инвестмънт“ ООД, с ЕИК (ЕИК) („Организаторът“).</p>
    </div>
    
    <div class="rules-section">
      <h4>Чл.2.</h4>
      <p>Лигата има за цел да подпомогне развитието на спорта в Дупница и да насърчи спортната култура в обществото.</p>
    </div>
    
    <div class="rules-section">
      <h4>Чл.3.</h4>
      <p>Организаторът запазва правото си да изменя и допълва настоящите правила, както и да решава всички въпроси, свързани с участието, регистрацията, дерегистрацията на участниците, организацията и провеждането на лигата, правилата на играта, класирането, придобиването на награди и всички останали аспекти, свързани с Лигата.</p>
    </div>
    
    <div class="rules-section">
      <h4>Чл.4.</h4>
      <p>Участието в Лигата е доброволно. Организаторът не носи отговорност за разходи, щети или загуби, които участниците могат да понесат по време на регистрация, участие или във връзка с Турнира. Организаторът не носи отговорност за решения относно организацията, провеждането на Турнира, класирането, резултатите, отпадането от турнира или разпределението на наградния фонд, както и за други въпроси свързани с Лигата. Организаторът не носи отговорност за здравето на участниците при евентуални контузии.</p>
    </div>
    
    <div class="rules-section">
      <h4>Чл.5.</h4>
      <p>Кандидатствайки за участие в Лигата, включително чрез попълване на регистрационна форма, участникът приема настоящите правила и се задължава да ги спазва.</p>
    </div>
    
    <div class="rules-section">
      <h4>Чл.6.</h4>
      <p>Кандидатствайки за участие, включително чрез попълване на регистрационна форма, участникът дава съгласие за обработване на личните му данни (две имена, дата на раждане) с цел организиране на турнира, уведомяване за време и място на мачовете, обявяване на класирани отбори и получаване на награди.</p>
    </div>
    
    <div class="rules-section">
      <h4>Чл.9.</h4>
      <p>След успешна регистрация, участникът ще получи информация относно датата и мястото на провеждане на съответния мач, в който отборът на участника ще участва.</p>
    </div>
    
    <div class="rules-section">
      <h4>Чл.14.</h4>
      <p>Всеки отбор трябва да се състои от минимум 6 (препорачително минимум 8 души)</p>
    </div>
    
    <div class="rules-section">
      <h4>Чл.13.</h4>
      <p>(1) Лигата ще се проведе, ако се регистрират поне 6 отбора. В случай на по-малко отбори, Организаторът може да реши да проведе лигата с по-малък брой отбори или да обяви, че лигата няма да се проведе.</p>
    </div>
    
    <div class="rules-section">
      <h4>Чл.17.</h4>
      <p>Класирането на отборите в лигата ще се извърши въз основа на резултатите от мачовете. Решението на организатора е окончателно и може да бъде променяно само от него.</p>
    </div>
    
    <div class="rules-section">
      <h4>Чл.24.</h4>
      <p>Всеки участник, включително резервен, трябва да демонстрира спортсменско поведение и да спазва всички приложими законови правила и добри нрави.</p>
    </div>
    
    <div class="rules-section">
      <h4>Чл.25.</h4>
      <p>(1) Всеки участник сам преценява собственото си физическо и психическо състояние и риска от участие в мачовете.</p>
      <p>(2) Организаторът има право, но не е задължен, да спре от участие участник, който явно не е в добро здравословно състояние.</p>
      <p>(3) Организаторът има право да не допусне участник до мач, ако той видимо е употребил алкохол, наркотични вещества или нарушава закона, добрите нрави или настоящите правила.</p>
      <p>(4) Организаторът не носи отговорност пред останалите участници за решенията си относно допускането на определени лица до играта, независимо от причината.</p>
    </div>
    
    <div class="rules-section">
      <h4>Чл.26.</h4>
      <p>Всеки участник дава съгласие да бъде сниман или сниман на видео, и неговото име и изображение могат да бъдат използвани от организатора или спонсора на турнира, както и публикувани на техните уебсайтове. За публикуването на изображения с участника, организаторът или спонсорът не са длъжни да предоставят плащане или друго възнаграждение.</p>
    </div>
    
    <div class="rules-section">
      <h4>Чл.27.</h4>
      <p>Организаторът може да реши да отменя който и да етап или мач от лигата, или самата лига. Той не носи отговорност пред участниците за подобни решения.</p>
    </div>
  </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="#FF5733" text @click="dialog = false"
                >Затвори</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogRules" max-width="600">
          <v-card>
            <v-card-title class="rules-title">СПОРТНО-ТЕХНИЧЕСКИ ПРАВИЛА</v-card-title>
            <v-card-text class="rules-container">
    
    <div class="rules-section">
      <h4>1. Срещи</h4>
      <p>Срещите (мачовете) се провеждат на терен с изкуствена тревна настилка.</p>
    </div>

    <div class="rules-section">
      <h4>2. Времетраене на срещите</h4>
      <p>Времетраенето на всяка среща е от 2 полувремена по 22 минути. Почивката между полувремената е до 3 минути, през които отборите разменят игралните полета.</p>    </div>

    <div class="rules-section">
      <h4>3. Състав на отборите</h4>
      <p>Отборите се състоят от минимум 6 състезатели, които на всеки мач биват записвани в протокола на срещата. Едновременно на терена могат да се намират само 5 полеви играчи и 1 вратар от всеки отбор.</p>    </div>

    <div class="rules-section">
      <h4>4. Ръководство на срещите</h4>
      <p>Всички срещи се ръководят от 2ма съдии. Всяка футболна среща се ръководи от един главен съдия и помощник съдия(статистик), разположени на тъч линиите.</p>    </div>

    <div class="rules-section">
      <h4>5. Футболни делегати</h4>
      <p>На срещите от турнира присъстват футболни делегати, които водят и заверяват протоколите от мачовете и ги предават на Организатора.</p>
    </div>

    <div class="rules-section">
      <h4>6. Санкции и наказания</h4>
      <p>В случай на червен картон, санкционираният състезател напуска терена и отборът играе с човек по-малко за 2 минути. След изтичане на наказателното време, наказаният състезател може да бъде заменен. Ако отборът има само 6 състезателя, играе с 5. По-тежки провинения могат да доведат до отстраняване от турнира или служебна загуба.</p>
    </div>

    <div class="rules-section">
      <h4>7. Условия за участие</h4>
      <p>Не се допуска участие на състезатели с обувки с алуминиеви, пластмасови или гумени бутони, часовници, очила, пръстени и други опасни предмети, както и с екипи с конкурентни лога. Съдията може да покаже директен червен картон на състезатели, които нарушават това правило.</p>
    </div>

    <div class="rules-section">
      <h4>8. Смени</h4>
      <p>Всеки отбор има право на неограничен брой смени, които се извършват на определено място на игралното поле, след получаване на съгласие от съдията.</p>
    </div>

    <div class="rules-section">
      <h4>9. Странично хвърляне (тъч)</h4>
      <p>Изпълнява се от земя с крак и има статут на непряк свободен удар.</p>
    </div>

    <div class="rules-section">
      <h4>10. Шпагат</h4>
      <p>При шпагат се отсъжда фаул и се изпълнява непряк свободен удар.</p>
    </div>

    <div class="rules-section">
      <h4>11. Правила за вратарите</h4>
      <p>Вратарите нямат право да играят с ръце извън наказателното поле, при върната от съотборник топка или след странично хвърляне. За нарушение се отсъжда пряк свободен удар. Вратарите трябва да носят отличителни потници, предоставени от организатора.</p>
    </div>

    <div class="rules-section">
      <h4>12. Облекло и топки</h4>
      <p>В случай на съвпадение в цвета на екипите, организаторът осигурява допълнителни отличителни потници. Всички мачове се играят с футболни топки, предоставени от организатора.</p>
    </div>

    <div class="rules-section">
      <h4>15. Точки и класиране</h4>
      <p>На срещите се присъждат 3 точки при победа, 1 точка при равенство и 0 точки при загуба.</p>
        </div>
    <div class="rules-section">
      <h4>17. Отстраняване на отбори</h4>
      <p>Организаторът има право да отстрани отбори при съмнения за симулативна игра, некоректно поведение или други фактори, касаещи феърплей атмосферата на турнира.</p>
    </div>

    <div class="rules-section">
      <h4>18. Приложимост на наредбите</h4>
      <p>За неупоменати въпроси се прилагат аналогичните разпоредби на Наредбата за първенствата и турнирите по футбол в системата на БФС за сезон 2024/2025.</p>
    </div>

    <div class="rules-section">
      <h4>19. Решение на спорни въпроси</h4>
      <p>Всички спорни въпроси се решават от Организатора, чието решение е окончателно и задължително за всички участници.</p>
    </div>
  </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="#FF5733" text @click="dialogRules = false"
                >Затвори</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </BaseContainer>
    </template>
  </SidebarLayout>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      dialogRules: false,
    };
  },
};
</script>

<style scoped lang="sass">

.steps-container 
  display: flex
  justify-content: space-around
  background-color: #f5f5f5 
  padding: 30px
  color: black

.step 
  text-align: center


.step img 
  width: 50px
  height: 50px
  margin-bottom: 10px


.card-opacity 
  opacity: 0.8


.carousel-item 
  position: relative
  border-radius: 8px
  overflow: hidden
  background-color: black


.carousel-control 
  position: absolute
  top: 50%
  transform: translateY(-50%)
  background-color: rgba(0, 0, 0, 0.5)
  border-radius: 50%
  cursor: pointer
  z-index: 10
  color: white


.carousel-control.prev 
  left: 10px


.carousel-control.next 
  right: 10px


.v-overlay__content 
  background: rgba(0, 0, 0, 0.5)
  border-radius: 8px


.v-card 
  border-radius: 8px


.rules-container 
  font-family: 'Roboto', sans-serif
  line-height: 1.6
  color: #333


.rules-title 
  font-size: 1.5rem
  font-weight: bold
  margin-bottom: 1rem
  color: #debd68 


.rules-section 
  margin-bottom: 1.5rem
  padding: 1rem
  border-left: 4px solid #debd68 
  background-color: #f9f9f9 
  border-radius: 8px 


.rules-section h4 
  font-size: 1.2rem
  font-weight: bold
  color: #253C59 


.rules-section p 
  margin: 0

</style>
