<template>
  <div class="container-app">
    <div class="container-quiz">
        <div class="quiz-header">
            <h1>แบบทดสอบที่ 2</h1>
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
    name: 'Quiz2',
    data(){
        return{
            questions:[
                {
                    question:'1.Centrioles ภายในเซลล์มีหน้าที่สำคัญในการควบคุม',
                    suggestions:[
                        {suggestion:'1. การสังเคราะห์โปรตีน'},
                        {suggestion:'2. การเคลื่อนไหวของ cilia และ flagella',correct:true},
                        {suggestion:'3. การสร้างผนังเซลล์'},
                        {suggestion:'4. การหายใจ'},
                    ]
                },
                {
                    question:'2.สารเคมีที่พบว่ามีมากที่สุดในเซลล์ทั่วๆไป คือ',
                    suggestions:[
                        {suggestion:'1. nucleic acid'},
                        {suggestion:'2. glucose'},
                        {suggestion:'3. water',correct:true},
                        {suggestion:'4. amino acid'},
                    ]
                },
                {
                    question:'3.แหล่งสังเคราะห์โปรตีนภายในเซลล์ได้แก่',
                    suggestions:[
                        {suggestion:'1. ribosome',correct:true},
                        {suggestion:'2. mitochondria'},
                        {suggestion:'3. lysosome'},
                        {suggestion:'4. golgi bodies'},
                    ]
                },
                {
                    question:'4.ข้อใดต่อไปนี้ที่กล่าวถึง "Mitochondria" อย่างถูกต้องที่สุด',
                    suggestions:[
                        {suggestion:'1. ยังไม่ทราบหน้าที่แน่นอน'},
                        {suggestion:'2. เป็นศูนย์กลางของการหายใจภายในเซลล์',correct:true},
                        {suggestion:'3. เป็นศูนย์กลางในการสร้างเอนไซม์ภายในเซลล์'},
                        {suggestion:'4. เป็นโครงสร้างสำคัญในขบวนการแบ่งเซลล์'},
                    ]
                },
                {
                    question:'5.Organelle ของเซลล์ที่มีหน้าที่ทำลายสิ่งแปลกปลอมจากภายนอก คือ',
                    suggestions:[
                        {suggestion:'1. ribosome'},
                        {suggestion:'2. microsomes'},
                        {suggestion:'3. mitochondria'},
                        {suggestion:'4. lysosome',correct:true},
                    ]
                },
                {
                    question:'6.เมื่อหยดน้ำเกลือ 0.85% บนสไลด์ที่มีหยดน้ำที่มีพารามีเซียมอยู่จะมีผลทำให้',
                    suggestions:[
                        {suggestion:'1. contratile vacuole ทำงานเร็วขึ้น'},
                        {suggestion:'2. contratile vacuole ทำงานช้าลง',correct:true},
                        {suggestion:'3. ไม่น่าจะมีการเปลี่ยนแปลงของ contratile vacuole'},
                        {suggestion:'4. พารามีเซียมจะหยดเคลื่อนที่ทันที'},
                    ]
                },
                {
                    question:'7.Organelles ที่มีส่วนประกอบภายในโครงร่าง เป็น 9+2 คือ',
                    suggestions:[
                        {suggestion:'1. คลอโรพลาสต์'},
                        {suggestion:'2. แฟลกเจลลัม',correct:true},
                        {suggestion:'3. เซ็นทริโอล'},
                        {suggestion:'4. เบซัลบอดี'},
                    ]
                },
                {
                    question:'8.Organelles ของเซลล์ข้อใดที่ทำหน้าที่เกี่ยวกับขบวนการออโตไลซิส',
                    suggestions:[
                        {suggestion:'1. Golgi apparatus'},
                        {suggestion:'2. ไมโครโซม'},
                        {suggestion:'3. ไรโบโซม'},
                        {suggestion:'4. ไลโซโซม',correct:true},
                    ]
                },
                {
                    question:'9.โดยทั่วๆไปในเซลล์ที่มีปริมาณของ RNA สูง สารที่มักจะพบว่ามีปริมาณสูงด้วย คือ',
                    suggestions:[
                        {suggestion:'1. คาร์โบไฮเดรต'},
                        {suggestion:'2. โปรตีน',correct:true},
                        {suggestion:'3. ไขมัน'},
                        {suggestion:'4. เกลือแร่'},
                    ]
                },
                {
                    question:'10.โมเลกุลกรดนิวคลีอิกชนิดต่างๆ มีขนาดต่างกันดังนี้',
                    suggestions:[
                        {suggestion:'1. DNA > tRNA > mRNA'},
                        {suggestion:'2. DNA > mRNA > tRNA',correct:true},
                        {suggestion:'3. DNA > mRNA = tRNA'},
                        {suggestion:'4. mRNA > DNA > tRNA'},
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