<template>
  <div class="container-app">
    <div class="container-quiz">
        <div class="quiz-header">
            <h1>แบบทดสอบที่ 3</h1>
        </div>
        <div class="step-progress" :style="{'width': progress + '%'}"></div>
        <div class="quiz-main" v-for="(element,index) in questions.slice(a,b)" :key="index" v-show="quiz">
            <div class="box-question">
                <h2>คำถามที่ {{b}}/{{questions.length}}</h2>
                <p>{{element.question}}</p>
            </div>
            <div class="box-suggestions">
                <ul>
                    <li v-for="(item,index) in element.suggestions" :key="index" :class="select ? check(item) : ''" @click="selectResponse(item)">{{item.suggestion}}</li>
                </ul>
            </div>
        </div>
        <div class="box-score" v-if="score_show">
                <h2>คะแนนที่คุณได้</h2>
                <h2>{{score}}/{{questions.length}}</h2>
                <div class="btn-restart">
                    <button @click="restartQuiz">เริ่มใหม่</button>
                </div>
        </div>
        <div class="quiz-footer">
            <div class="box-button" v-if="progress < 100">
                <button @click="skipQuestion" :style="!next ? 'background-color:rgb(106,128,202)' : ''">ข้าม</button>
                <button @click="nextQuestion" :style="next ? 'background-color:rgb(106,128,202)' : ''">ข้อต่อไป</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Quiz3',
    data(){
        return{
            questions:[
                {
                    question:'1.การสังเคราะห์ tRNA เกิดขึ้นใน',
                    suggestions:[
                        {suggestion:'1. นิวเคลียส',correct:true},
                        {suggestion:'2. ไมโทคอนเดรีย'},
                        {suggestion:'3. ไรโบโซม'},
                        {suggestion:'4. เอนโดพลาสมิก เรดิคูลัม'},
                    ]
                },
                {
                    question:'2.ลักษณะโครงสร้างพื้นฐานของเซลล์ในสิ่งมีชีวิตกลุ่มใดที่ถือว่าแตกต่างไปจากกลุ่มอื่นๆ',
                    suggestions:[
                        {suggestion:'1. สาหร่ายสีน้ำเงินแกมเขียว',correct:true},
                        {suggestion:'2. สาหร่ายสีแดง'},
                        {suggestion:'3. เห็ดรา'},
                        {suggestion:'4. สาหร่ายสีเขียว'},
                    ]
                },
                {
                    question:'3.ถ้าเปรียบเทียบเซลล์เป็นห้องต่างๆ ภายในบ้านเดียวกัน ท่านคิดว่าห้องไหนคับแคบมากที่สุด',
                    suggestions:[
                        {suggestion:'1. cork'},
                        {suggestion:'2. fiber',correct:true},
                        {suggestion:'3. tracheids'},
                        {suggestion:'4. collenchyma'},
                    ]
                },
                {
                    question:'4.เซลล์ที่มี Lysosomes มากที่สุด คือ',
                    suggestions:[
                        {suggestion:'1. เซลล์ตับ'},
                        {suggestion:'2. เซลล์ที่บริเวณหลอดของหน่วยเนฟรอน'},
                        {suggestion:'3. เซลล์เม็ดเลือดขาว',correct:true},
                        {suggestion:'4. เซลล์ของต่อมไร้ท่อ'},
                    ]
                },
                {
                    question:'5.Organelles ของเซลล์ส่วนใดที่ทำหน้าที่สร้างโปรตีน',
                    suggestions:[
                        {suggestion:'1. Nucleolus'},
                        {suggestion:'2. Golgi Apparatus'},
                        {suggestion:'3. Mitochondria'},
                        {suggestion:'4. Ribosome',correct:true},
                    ]
                },
                {
                    question:'6.สารประกอบอินทรีย์ที่จัดว่าเป็นส่วนประกอบของ nuclear membrane คือ',
                    suggestions:[
                        {suggestion:'1. กรดไขมัน โปรตีน และลิพิด'},
                        {suggestion:'2. DNA RNA และโปรตีน'},
                        {suggestion:'3. ลิพิด และโปรตีน'},
                        {suggestion:'4. ลิพิด โปรตีน คาร์โบไฮเดรต',correct:true},
                    ]
                },
                {
                    question:'7.ผนังเซลล์ที่มีสารประกอบพวกใดจะสามารถทนทานต่อการชะล้างของน้ำ การทำลายของจุลินทรีย์ และลดการระเหยของน้ำได้ดีที่สุด',
                    suggestions:[
                        {suggestion:'1. กรดเพกติก'},
                        {suggestion:'2. เซลลูโลส'},
                        {suggestion:'3. ซูเบอริน',correct:true},
                        {suggestion:'4. ลิกนิน'},
                    ]
                },
                {
                    question:'8.ดอกอัญชัญมีสีน้ำเงิน ส่วนดอกพู่ระหงมีสีแดง ทั้งนี้ เพราะดอกไม้ทั้งสองชนิดมี',
                    suggestions:[
                        {suggestion:'1. รงควัตถุชนิดเดียวกันแต่อยู่ใน cell sap ที่มีสภาวะเป็นกรดหรือด่างต่างกัน'},
                        {suggestion:'2. รงควัตถุต่างชนิดกัน',correct:true},
                        {suggestion:'3. พลาสติดชนิดเดียวกันแต่อยู่ในไซโทพลาซึมที่มีสภาวะเป็นกรดหรือด่างต่างกัน'},
                        {suggestion:'4. พลาสติดต่างชนิดกัน'},
                    ]
                },
            ],
            a:0,
            b:1,
            select:false,
            score:0,
            quiz:true,
            score_show:false,
            next:false,
            progress:0,
        }
    },
    methods:{
        selectResponse(e){
            this.select = true;
            this.next = true;
            if(e.correct){
                this.score++;
            }
        },

        check(status){
            if (status.correct){
                return 'correct'
            }else{
                return 'incorrect'
            }
        },
        nextQuestion(){
            if(!this.next){
                return;
            }
            this.progress = this.progress + (100/this.questions.length);
            if(this.questions.length - 1 == this.a){
                this.score_show = true;
                this.quiz = false;
            }else{
                this.a++;
                this.b++;
                this.select = false;
                this.next = false;
            }
        },
        skipQuestion(){
            if(this.next){
                return;
            }
            this.progress = this.progress + (100/this.questions.length);
            if(this.questions.length - 1 == this.a){
                this.score_show = true;
                this.quiz = false;
            }else{
                this.a++;
                this.b++;
            }
        },
        restartQuiz(){
            Object.assign(this.$data, this.$options.data());
        }
    }
}
</script>

<style lang="scss" scoped>
*{
    font-family: 'Poppins', sans-serif;
    margin: 0;
    letter-spacing: 2px; 
}

.container-app {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
}

.container-quiz {
    display: flex;
    width: 40%;
    height: 85%;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    flex-flow: column;
    text-align: center;
    border: 1px solid #e7eae0;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.quiz-header {
    display: flex;
    width: 100%;
    height: 20%;
    border-bottom: 1px solid #e7eae0;
    justify-content: center;
    align-items: center;
    background-color: #e7eae0;
    border-radius: 10px 10px 0px 0px;
}

.quiz-main {
    display: flex;
    width: 100%;
    height: 70%;
    flex-flow: column;
    margin: auto;
}

.quiz-footer {
    display: flex;
    width: 100%;
    height: 10%;
    justify-content: center;
    border-top: 1px solid #e7eae0;
    background-color: #e7eae0;
    border-radius: 0px 0px 10px 10px;
}

.box-question {
    margin-top: 20px;
}

.box-suggestions {
    display: flex;
    width: 100%;
    justify-content: center;
    margin: auto;
}

ul {
    display: flex;
    width: 80%;
    margin: 0;
    padding: 0;
    flex-flow: column;
}

li {
    list-style: none;
    line-height: 2;
    border: 1px solid #cdd2d2;
    margin-bottom: 20px;
    border-radius: 15px;
    cursor: pointer;
    transition: 0.3s;
}

li:hover {
    background-color: #e7eae0;
}

.box-button {
    display: flex;
    width: 100%;
}

.box-button button {
    width: 150px;
    height: 35px;
    outline: none;
    border: 0;
    color: white;
    font-size: 18px;
    cursor: pointer;
    border-radius: 15px;
    margin: auto;
    background-color: #a09f9ff5;
}

li.correct{
    border: 1px solid rgb(74, 219, 74);
    background-color: rgb(74, 219, 74);
    color: white;
    font-weight: 600;
}

li.incorrect{
    border: 1px solid rgb(240, 117, 100);
    background-color: rgb(240, 117, 100);
    color: white;
    font-weight: 600;
}

.box-score{
    display: flex;
    width: 100%;
    height: 70%;
    flex-flow: column;
}

.box-score h2{
    margin-top: 40px;
}

.btn-restart{
    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
    margin-top: 50px;
}
.btn-restart button {
    width: 150px;
    height: 35px;
    outline: none;
    border: 0;
    color: white;
    font-size: 18px;
    cursor: pointer;
    border-radius: 15px;
    margin: auto;
    background-color: rgb(106, 128, 202);
}
.step-progress{
    display: flex;
    width: 100%;
    height: 5px;
    background-color: rgb(106, 128, 202);
    transition: 0.5s;
}

@media screen and (max-width:900px){
    .container-quiz{
        width: 60%;
    }
}

@media screen and (max-width:720px){
    .container-quiz{
        width: 80%;
    }
    .box-button button{
        width: 100px;
    }
}
</style>