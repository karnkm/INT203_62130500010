    const app = {
        data() {
            return {
                firstname: 'Karnkamol',
                lastname : "Phattanaphirome",
                province : "Bangkok",
                image : './images/2.JPG',
                bg :'./images/1.JPG',
                Followers: '932',
                Projects : '79',
                Ranks: "129"
                    }            
                }
    }
    var mountedApp =  Vue.createApp(app).mount('#app')