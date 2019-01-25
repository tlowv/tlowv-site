<template>
    <ul>
        <li v-for="attorney in attorneys" 
            :key=attorney
        >
            {{attorney.name}} - {{attorney.education}}
            <div v-for="description in attorney.descriptions"
                :key=description
            >
                {{description.blurb}}
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'AttorneysHeader',
    data: () => ({
        attorneys: [
            {
                name: 'Trevor K. Taylor',
                education: 'J.D., West Virginia College of Law, 2001',
                descriptions: [
                    {
                        blurb:
                            'Concentrates his practice in the areas of defense of large loss liability claims, first party coverage disputes, insurance coverage, and extra-contractual defense.'
                    },
                    {
                        blurb:
                            'Successfully tried over 20 cases, several before the Supreme Court, and resolved countless others through mediation.'
                    }
                ]
            },
            {
                name: 'Paul W. Gwaltney, Jr.',
                education: 'J.D., West Virginia College of Law, 2003',
                descriptions: [
                    {
                        blurb: 'Joined Taylor Law Office in 2009'
                    },
                    {
                        blurb:
                            'Concentrates his practice in the areas of automobile accident defense, insurance coverage, uninsured, and underinsured motorist claims.'
                    }
                ]
            },
            {
                name: 'Christopher B. Denson',
                education: 'J.D., Widener University, 1999',
                descriptions: [
                    {
                        blurb: 'Joined Taylor Law Office in 2012'
                    },
                    {
                        blurb:
                            'Member of The Defense Trial Counsel of West Virginia'
                    },
                    {
                        blurb:
                            'Concentrates his practice in the areas of insurance coverage, extra-contractural defense, personal injury, wrongful death, products liability, property damage claims, and construction law.'
                    }
                ]
            },
            {
                name: 'Tiffany A. Cropp',
                education: 'J.D., West Virginia College of Law, 2006',
                descriptions: [
                    {
                        blurb: 'Joined Taylor Law Office in 2013'
                    },
                    {
                        blurb:
                            'Concentrates her practice in the areas of insurance coverage, declaratory judgment actions, and deliberate intent.'
                    }
                ]
            }
        ]
    })
};
</script>

<style scoped>
</style>
