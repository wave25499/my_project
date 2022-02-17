<template>
  <div class="container-app">
    <div class="container-quiz">
        <div class="quiz-header">
            <h1>แบบทดสอบที่ 1</h1>
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
    name: 'Quiz1',
    data(){
        return{
            questions:[
                {
                    question:'1.เซลล์ส่วนใดของสัตว์ที่ทำหน้าที่เทียบได้กับรากขน (Root Hair) ของพืช',
                    suggestions:[
                        {suggestion:'1. epidermis'},
                        {suggestion:'2. hair follicle'},
                        {suggestion:'3. intestinal epithelium',correct:true},
                        {suggestion:'4. boold capillaries'},
                    ]
                },
                {
                    question:'2.เซลล์ของสิ่งมีชีวิตประเภทใดในจำพวกต่อไปนี้ที่ไม่มี nuclear membrane หุ้ม nucleus อยู่',
                    suggestions:[
                        {suggestion:'1. เซลล์เม็ดเลือดแดงของกบ'},
                        {suggestion:'2. euglena'},
                        {suggestion:'3. สาหร่ายสีเขียวแกมน้ำเงิน (blue green algae)',correct:true},
                        {suggestion:'4. สาหร่ายสีน้ำตาล (brown algae)'},
                    ]
                },
                {
                    question:'3.เซลล์พืชและเซลล์สัตว์ มีความแตกต่างกันคือ',
                    suggestions:[
                        {suggestion:'1. เซลล์พืชมี vacuole'},
                        {suggestion:'2. เซลล์สัตว์มี nucleolus'},
                        {suggestion:'3. เซลล์พืชมีผนังเซลล์หนาและแข็งแรง',correct:true},
                        {suggestion:'4. เซลล์สัตว์มี nuclear chromatin ยึดติดกับ lignin fiber'},
                    ]
                },
                {
                    question:'4.สิ่งซึ่งพบในเซลล์สาหร่ายอื่นๆ แต่ไม่พบในเซลล์ของสาหร่ายสีเขียวแกมน้ำเงิน คือ',
                    suggestions:[
                        {suggestion:'1. carbohydrate'},
                        {suggestion:'2. cell membrane'},
                        {suggestion:'3. chlorophyll'},
                        {suggestion:'4. plastids',correct:true},
                    ]
                },
                {
                    question:'5.Cyclosis เป็นการไหลเวียนภายในเซลล์ของโครงสร้างใด',
                    suggestions:[
                        {suggestion:'1. คลอโรพลาสต์'},
                        {suggestion:'2. ไมโทคอนเดรีย',correct:true},
                        {suggestion:'3. ไซโทพลาซึม'},
                        {suggestion:'4. ผลึกต่างๆ'},
                    ]
                },
                {
                    question:'6.การหายใจจะเกิดขึ้นที่ส่วนไหนของเซลล์',
                    suggestions:[
                        {suggestion:'1. cytoplasm'},
                        {suggestion:'2. mitochondria',correct:true},
                        {suggestion:'3. nucleus'},
                        {suggestion:'4. endoplasmic reticulum'},
                    ]
                },
                {
                    question:'7.ส่วนของเซลล์ที่มีขนาดเล็กที่สุดในที่นี้ คือ',
                    suggestions:[
                        {suggestion:'1. chloroplast'},
                        {suggestion:'2. mitochondria'},
                        {suggestion:'3. ribosome',correct:true},
                        {suggestion:'4. golgi apparatus'},
                    ]
                },
                {
                    question:'8.สารประกอบอินทรีย์เคมีซึ่งมีความสำคัญในการเป็นแหล่งสะสมพลังงาน และเป็นองค์ประกอบที่สำคัญของ cell membrane คือ',
                    suggestions:[
                        {suggestion:'1. lipids',correct:true},
                        {suggestion:'2. carbohydrates'},
                        {suggestion:'3. proteins'},
                        {suggestion:'4. amino acids'},
                    ]
                },
                {
                    question:'9.ในเซลล์พืช เช่นเยื่อหอมหรือสาหร่ายหางกระรอก โครงสร้างที่กินเนื้อที่ส่วนใหญ่ของเซลล์ คือ',
                    suggestions:[
                        {suggestion:'1. nucleus'},
                        {suggestion:'2. mitochondria'},
                        {suggestion:'3. vacuole',correct:true},
                        {suggestion:'4. chloroplast'},
                    ]
                },
                {
                    question:'10.ส่วนประกอบภายในเซลล์ที่สำคัญต่อขบวนการหายใจ ได้แก่',
                    suggestions:[
                        {suggestion:'1. golgi bodies'},
                        {suggestion:'2. nucleus'},
                        {suggestion:'3. mitochondria',correct:true},
                        {suggestion:'4. endoplasmic reticulum'},
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