<template>
    <div>
        <VueTyper :text=wishes
        :repeat='Infinity'
        :shuffle='true'
        initial-action='typing'
        :pre-type-delay='70'
        :type-delay='70'
        :pre-erase-delay='2000'
        :erase-delay='1000'
        erase-style='select-all'
        :erase-on-complete='false'
        caret-animation='phase'>
    </VueTyper>
    </div>
</template>

<script>
    import VueTyper from 'vue3-typer'
    import "vue3-typer/dist/vue-typer.css"
    
    export default {
        name: 'TypeWriter',
        components: {
            VueTyper
        },
        data() {
            return {
                 wishes: [
                    "Afrikaans: Gelukkige Verjaarsdag",
                    "Albanian: Gëzuar Ditëlindjen",
                    "Arabic: عيد مولد سعيد",
                    "Bengali: শুভ জন্মদিন",
                    "Bulgarian: Честит рожден ден",
                    "Catalan: Feliç aniversari",
                    "Chinese (Mandarin): 生日快乐",
                    "Croatian: Sretan rođendan",
                    "Czech: Všechno nejlepší k narozeninám",
                    "Danish: Tillykke med fødselsdagen",
                    "Dutch: Gelukkige verjaardag",
                    "Finnish: Hyvää syntymäpäivää",
                    "French: Joyeux anniversaire",
                    "German: Alles Gute zum Geburtstag",
                    "Greek: Χαρούμενα γενέθλια",
                    "Hebrew: יום הולדת שמח",
                    "Hindi: जन्मदिन मुबारक हो",
                    "Hungarian: Boldog születésnapot",
                    "Icelandic: Til hamingju með afmælið",
                    "Indonesian: Selamat ulang tahun",
                    "Irish: Lá breithe shona duit",
                    "Italian: Buon compleanno",
                    "Japanese: お誕生日おめでとうございます",
                    "Korean: 생일 축하합니다",
                    "Norwegian: Gratulerer med dagen",
                    "Polish: Wszystkiego najlepszego z okazji urodzin",
                    "Portuguese: Feliz aniversário",
                    "Romanian: La mulți ani",
                    "Russian: С днём рождения",
                    "Somali: Dhalasho Wacan",
                    "Spanish: ¡Feliz cumpleaños!",
                    "Swahili: Furaha ya kuzaliwa",
                    "Swedish: Grattis på födelsedagen",
                    "Tagalog: Maligayang kaarawan",
                    "Thai: สุขสันต์วันเกิด",
                    "Turkish: Doğum günün kutlu olsun",
                    "Ukrainian: З Днем народження",
                    "Vietnamese: Chúc mừng sinh nhật",
                    "Welsh: Penblwydd Hapus",
                    "Yiddish: אַ פֿריילעכן געבורטסטאָג"
                    ]
            }
        }
    }
</script>

<style scoped>
</style>