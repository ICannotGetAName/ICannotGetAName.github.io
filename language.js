i18next
                .use(i18nextBrowserLanguageDetector)
                .init({
                    debug: true,
                    fallbackLng: 'en',
                    resources: {
                        en: {
                            translation: {
                                "nav_home": "HOME",
                                "nav_education": "EDUCATION",
                                "nav_work_experience": "WORK EXPERIENCE",
                                "nav_about_me": "ABOUT ME",
                                "nav_blog": "BLOG",
                                "profile_title": "Here is Xinrui Jonas Wang!",
                                "download_cv": "Download CV",
                                "study_title": "Study at...",
                                "study_text": "Ludwig-Maximilian-University",
                                "work_title": "Work as...",
                                "work_text": "Internship in Mercedes-Benz AG",
                                "about_title": "About Me...",
                                "about_text": "Click here to learn more about me"
                            }
                        },
                        zh: {
                            translation: {
                                "nav_home": "主页",
                                "nav_education": "教育",
                                "nav_work_experience": "工作经验",
                                "nav_about_me": "关于我",
                                "nav_blog": "博客",
                                "profile_title": "这里是王鑫瑞！",
                                "download_cv": "下载简历",
                                "study_title": "就读于...",
                                "study_text": "慕尼黑大学",
                                "work_title": "工作于...",
                                "work_text": "梅赛德斯-奔驰公司",
                                "about_title": "关于我...",
                                "about_text": "点击这里了解更多关于我的信息"
                            }
                        }
                    }
                }, function(err, t) {
                    updateContent();
                });

            function updateContent() {
                document.getElementById('nav_home').innerText = i18next.t('nav_home');
                document.getElementById('nav_education').innerText = i18next.t('nav_education');
                document.getElementById('nav_work_experience').innerText = i18next.t('nav_work_experience');
                document.getElementById('nav_about_me').innerText = i18next.t('nav_about_me');
                document.getElementById('nav_blog').innerText = i18next.t('nav_blog');
                document.getElementById('profile_title').innerText = i18next.t('profile_title');
                document.getElementById('download_cv').innerText = i18next.t('download_cv');
                document.getElementById('study_title').innerText = i18next.t('study_title');
                document.getElementById('study_text').innerText = i18next.t('study_text');
                document.getElementById('work_title').innerText = i18next.t('work_title');
                document.getElementById('work_text').innerText = i18next.t('work_text');
                document.getElementById('about_title').innerText = i18next.t('about_title');
                document.getElementById('about_text').innerText = i18next.t('about_text');
            }

            function changeLanguage(language) {
    i18next.changeLanguage(language, function(err, t) {
        if (err) return console.error('Something went wrong loading', err);
        updateContent();
    });
}
