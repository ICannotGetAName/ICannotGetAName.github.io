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
                                "about_text": "Click here to learn more about me",
                              "uni_name": "Ludwig-Maximilian-University",
                            "major_name": "Computer Science B.Sc. (Major)",
                            "important_courses": "Important courses",
                            "Introduction_to_Programming": "Introduction to Programming",
                            "Algorithms_and_Data_Structures": "Algorithms and Data Structures",
                            "Computer_architecture": "Computer architecture",
                            "Higher_Mathematics": "Higher Mathematics",
                            "Operating_system": "Operating system",
                            "Software_technology": "Software technology",
                            "Professional_knowledge": "Professional knowledge",
                            "Java": "Java",
                            "Haskell": "Haskell",
                            "Algorithms_and_Data_structures": "Algorithms and Data structures",
                            "Mathematics": "Mathematics",
                            "Software_Engineering": "Software Engineering",
                            "minor_name": "Business Management B.A. (Minor)",
                            "important_courses_minor": "Important courses",
                            "Fundamentals_of_Business_Management": "Fundamentals of Business Management 1&2"
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
                                "about_text": "点击这里了解更多关于我的信息",
                              "uni_name": "慕尼黑大学",
                            "major_name": "计算机学士（主修）",
                            "important_courses": "重要课程",
                            "Introduction_to_Programming": "编程导论",
                            "Algorithms_and_Data_Structures": "算法和数据结构",
                            "Computer_architecture": "计算机体系结构",
                            "Higher_Mathematics": "高等数学",
                            "Operating_system": "操作系统",
                            "Software_technology": "软件技术",
                            "Professional_knowledge": "专业知识",
                            "Java": "Java",
                            "Haskell": "Haskell",
                            "Algorithms_and_Data_structures": "算法和数据结构",
                            "Mathematics": "数学",
                            "Software_Engineering": "软件工程",
                            "minor_name": "企业管理（辅修）",
                            "important_courses_minor": "重要课程",
                            "Fundamentals_of_Business_Management": "企业管理基础 1&2"
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
