// ===== ĐỀ CƯƠNG BÀI 6 & 7 - LỚP 11 =====
const exams = [
  {
    id: "bai6_code1",
    title: "Bài 6 – Preserving Our Heritage (Code 1)",
    sections: [
      {
        id: "b6c1_task1",
        title: "Task 1: Đọc hiểu – Cultural Heritage",
        type: "reading",
        passage: `Preserving cultural heritage is becoming increasingly important in the modern world. Cultural heritage includes historical buildings, traditional festivals, folk music, and local customs that have been passed down from generation to generation. These elements help define a community's identity and provide a strong sense of belonging for its people.\n\nHowever, many heritage sites are under serious threat. Rapid urbanisation, climate change, and mass tourism have caused significant damage to historical monuments and traditional lifestyles. In some places, ancient buildings have been replaced by modern structures, while traditional crafts are disappearing because young people are no longer interested in learning them.\n\nGovernments and local communities play a crucial role in heritage preservation. Laws can be introduced to protect important sites, and funds can be provided to restore damaged monuments. At the same time, local people should be encouraged to take pride in their cultural traditions and actively participate in preservation efforts. Education is also essential, as young generations need to understand the value of heritage in order to protect it.\n\nIn recent years, technology has offered new ways to preserve heritage. Digital archives, virtual museums, and online exhibitions allow people to access cultural heritage without causing physical damage. Although modern development is unavoidable, it should be carefully balanced with the responsibility to preserve heritage for future generations.`,
        questions: [
          { id: "b6c1t1q1", num: 1, text: "What is the main idea of the passage?", options: ["A. The impact of technology on modern life","B. The importance of protecting cultural heritage","C. The need to balance development and heritage preservation","D. The popularity of traditional festivals"], answer: "B" },
          { id: "b6c1t1q2", num: 2, text: "According to the passage, which of the following is considered cultural heritage?", options: ["A. Modern shopping centres","B. Traditional festivals","C. High-rise buildings","D. Online entertainment"], answer: "B" },
          { id: "b6c1t1q3", num: 3, text: "The word \"threat\" in paragraph 2 is closest in meaning to:", options: ["A. advantage","B. danger","C. solution","D. development"], answer: "B" },
          { id: "b6c1t1q4", num: 4, text: "Which factor is NOT mentioned as a cause of heritage loss?", options: ["A. Urbanisation","B. Climate change","C. Education systems","D. Mass tourism"], answer: "C" },
          { id: "b6c1t1q5", num: 5, text: "The word \"them\" in paragraph 2 refers to:", options: ["A. governments","B. local people","C. young generations","D. traditions"], answer: "D" },
          { id: "b6c1t1q6", num: 6, text: "Which sentence best paraphrases the idea of paragraph 3?", options: ["A. Only governments are responsible for heritage protection.","B. Both authorities and communities should work together to preserve heritage.","C. Heritage protection is too expensive to carry out.","D. Young people are not interested in cultural heritage."], answer: "B" },
          { id: "b6c1t1q7", num: 7, text: "Where in the passage does the writer mention modern technology?", options: ["A. Paragraph 1","B. Paragraph 2","C. Paragraph 4","D. Paragraph 3"], answer: "C" },
          { id: "b6c1t1q8", num: 8, text: "Which of the following statements is TRUE according to the passage?", options: ["A. Development should be stopped to protect heritage.","B. Technology can support heritage preservation.","C. Tourism always benefits heritage sites.","D. Cultural heritage only includes buildings."], answer: "B" }
        ]
      },
      {
        id: "b6c1_task2",
        title: "Task 2: Điền từ – Shared Responsibility",
        type: "cloze",
        passage: `Preserving heritage is a shared responsibility of both governments and local communities. Cultural heritage sites (1)_____ protected because they represent the history and identity of a nation. Many young people are encouraged (2)_____ part in activities that help protect traditional customs and historical places. One effective way to do this is through education, which raises awareness of the (3)_____ value of heritage. In addition, traditional festivals often play an important role in strengthening community bonds and promoting cultural pride. Some endangered sites can also (4)_________ with the support of modern technology and international cooperation. Without proper action, many valuable traditions and historical landmarks may (5)_____ forever.`,
        questions: [
          { id: "b6c1t2q1", num: 1, options: ["A. must be","B. should be","C. can protect","D. will protect"], answer: "B" },
          { id: "b6c1t2q2", num: 2, options: ["A. to take","B. taking","C. took","D. taken"], answer: "A" },
          { id: "b6c1t2q3", num: 3, options: ["A. modern","B. cultural","C. personal","D. natural"], answer: "B" },
          { id: "b6c1t2q4", num: 4, options: ["A. be restored","B. make restored","C. do restored","D. take restored"], answer: "A" },
          { id: "b6c1t2q5", num: 5, options: ["A. disappear","B. be lost","C. losing","D. lose"], answer: "A" }
        ]
      },
      {
        id: "b6c1_task3",
        title: "Task 3: Điền từ – Every Generation's Responsibility",
        type: "cloze",
        passage: `Preserving cultural heritage is a responsibility that every generation should take seriously. Cultural heritage includes historical sites, traditional festivals, local customs, and valuable artifacts that reflect the identity of a nation. Many heritage sites are now under threat due to rapid urbanisation and careless tourism. Therefore, governments and communities must work together to protect them effectively.\n\nOne important solution is making careful (1)_____ of resources to maintain historical buildings and cultural landscapes. In addition, young people need to understand the true (2)_____ of heritage so that they feel motivated to protect it. Schools can play a vital role by encouraging students to take part in heritage-related activities and community projects. Another effective approach is to promote the (3)________ of modern technology, such as digital archives and virtual museums, to preserve endangered sites. These methods help people access heritage without causing physical damage. Heritage protection is also closely connected with the role of local (4)__________, who pass down traditions and knowledge from one generation to another. Finally, it is essential (5)_______ a balance between economic development and heritage preservation in order to ensure sustainable growth for the future.`,
        questions: [
          { id: "b6c1t3q1", num: 1, options: ["A. use","B. use of","C. using","D. used"], answer: "B" },
          { id: "b6c1t3q2", num: 2, options: ["A. value","B. cost","C. price","D. level"], answer: "A" },
          { id: "b6c1t3q3", num: 3, options: ["A. careless use","B. effective use","C. quick use","D. heavy use"], answer: "B" },
          { id: "b6c1t3q4", num: 4, options: ["A. tradition","B. traditional","C. traditionalists","D. traditionally"], answer: "C" },
          { id: "b6c1t3q5", num: 5, options: ["A. keeping","B. kept","C. to keep","D. keep"], answer: "C" }
        ]
      },
      {
        id: "b6c1_task4",
        title: "Task 4: Sắp xếp câu / đoạn hội thoại",
        type: "mcq",
        questions: [
          {
            id: "b6c1t4q1", num: 1,
            text: "Sắp xếp đúng thứ tự:\na. Peter: I'm worried about the old temple in our village.\nb. Anna: Yes, it really needs protection.\nc. Peter: Many tourists are damaging it.",
            options: ["A. b–a–c","B. a–c–b","C. c–a–b","D. a–b–c"], answer: "B"
          },
          {
            id: "b6c1t4q2", num: 2,
            text: "Sắp xếp đúng thứ tự:\na. Mai: Our school is organising a heritage campaign.\nb. Nam: That sounds interesting. How can I join?\nc. Mai: You can sign up after class.",
            options: ["A. b–a–c","B. c–a–b","C. a–b–c","D. a–c–b"], answer: "C"
          },
          {
            id: "b6c1t4q3", num: 3,
            text: "Sắp xếp đúng thứ tự:\na. Anna: Hi Tom, what are you doing this weekend?\nb. Tom: I'm visiting a historical site with my family.\nc. Anna: That's great. Preserving heritage is important.\nd. Tom: Yes, we should protect it for the future.",
            options: ["A. b–a–c–d","B. a–b–c–d","C. a–c–b–d","D. c–a–b–d"], answer: "B"
          },
          {
            id: "b6c1t4q4", num: 4,
            text: "Sắp xếp đúng thứ tự:\na. Preserving heritage helps communities maintain their cultural identity and strengthens social connections among local people.\nb. Many historical sites are under threat because of rapid urban development and environmental changes.\nc. Governments should introduce effective laws to protect important cultural landmarks and traditions.\nd. Education plays a key role in raising awareness about the value of cultural heritage.\ne. Therefore, cooperation between authorities and communities is essential for sustainable heritage preservation.",
            options: ["A. b–a–d–c–e","B. a–b–c–d–e","C. b–d–a–c–e","D. b–a–c–d–e"], answer: "D"
          },
          {
            id: "b6c1t4q5", num: 5,
            text: "Sắp xếp đúng thứ tự:\na. Counter-urbanisation has encouraged many people to move back to rural areas in search of better quality of life.\nb. This trend has contributed to the revival of traditional lifestyles and local cultural practices.\nc. However, rural areas must manage development carefully to avoid damaging their cultural heritage.\nd. Sustainable planning can help balance economic growth with heritage preservation.\ne. As a result, rural communities can develop while maintaining their unique cultural identity.",
            options: ["A. a–c–b–d–e","B. a–b–c–d–e","C. b–a–c–d–e","D. a–b–d–c–e"], answer: "B"
          }
        ]
      }
    ]
  },
  {
    id: "bai6",
    title: "Bài 6 – Preserving Our Heritage (Code 2)",
    sections: [
      {
        id: "b6_task1",
        title: "Task 1: Điền từ – Natural World Heritage",
        type: "cloze",
        passage: `Natural World Heritage sites are globally recognised as the most significant protected areas on Earth, as they provide crucial habitats to many species, as well as protect rare and stunning (1) __________. They also contribute to economies, climate stability and human well-being.\n\nTwo-thirds of natural sites on the World Heritage List are crucial sources of water, and about half help prevent natural disasters such as floods or landslides (2) __________ protect surrounding communities. Over 90% of listed natural sites create jobs and provide income (3) __________ tourism and entertainment.\n\nThe success of the conservation of World Heritage can act as a test of the effectiveness of protected areas globally, and of our ability to protect nature overall. Many natural World Heritage sites demonstrate that conservation works when efforts are made continuously. For instance, Comoé National Park in Côte d'Ivoire came off the List of World Heritage in Danger in 2017 thanks to international support and joint action on the ground, which resulted in species populations rising. This success shows the importance of (4) __________ joint action to protect nature and highlights the (5) __________ value of conservation efforts.`,
        questions: [
          { id: "b6t1q1", num: 1, options: ["A. landscape","B. landscapes","C. landscaping","D. landscaped"], answer: "B" },
          { id: "b6t1q2", num: 2, options: ["A. to help","B. helping","C. help","D. helped"], answer: "B" },
          { id: "b6t1q3", num: 3, options: ["A. from","B. with","C. by","D. for"], answer: "A" },
          { id: "b6t1q4", num: 4, options: ["A. taking","B. making","C. doing","D. giving"], answer: "A" },
          { id: "b6t1q5", num: 5, options: ["A. global","B. minor","C. temporary","D. personal"], answer: "A" }
        ]
      },
      {
        id: "b6_task2",
        title: "Task 2: Điền từ – Protected Areas",
        type: "cloze",
        passage: `Over 250,000 protected areas make up around 15% of the globe's surface area. They include World Heritage Sites, national parks, nature reserves and (6) __________ other sites on land or water. These protected areas are crucial for preserving the world's biodiversity and ecosystem functions. They also support the well-being of millions of people.\n\nProtected areas are increasingly under threat because of global change. These include pollution, climate change and biological invasions caused by invasive alien species. Invasive alien species are organisms that are moved by humans to new regions where they traditionally don't occur. For various reasons, these species spread uncontrollably and can negatively affect their new environments, often after (7) __________ introduced by human activities.\n\nInvasive alien species are one of the leading threats to biodiversity in protected areas globally. For example, in South Africa, invasive tree species on Table Mountain National Park are changing naturally occurring fire and water systems. Managing invasive alien species is also a huge financial burden, which many protected areas find difficult to (8) __________.\n\nA team of researchers and managers (9) __________ in invasion science have been monitoring invasive alien species in World Heritage Sites across the world. Therefore, a new framework was developed to guide monitoring and reporting of invasive alien species, highlighting the serious (10) __________ they pose to protected areas globally.`,
        questions: [
          { id: "b6t2q6", num: 6, options: ["A. many","B. much","C. little","D. fewer"], answer: "A" },
          { id: "b6t2q7", num: 7, options: ["A. having been","B. being","C. having","D. to have been"], answer: "A" },
          { id: "b6t2q8", num: 8, options: ["A. deal with","B. look after","C. take over","D. break down"], answer: "A" },
          { id: "b6t2q9", num: 9, options: ["A. working","B. worked","C. work","D. works"], answer: "A" },
          { id: "b6t2q10", num: 10, options: ["A. threat","B. benefit","C. support","D. resource"], answer: "A" }
        ]
      },
      {
        id: "b6_task3",
        title: "Task 3: Sắp xếp câu / đoạn hội thoại",
        type: "mcq",
        questions: [
          {
            id: "b6t3q11", num: 11,
            text: "Sắp xếp đúng thứ tự:\na. Peter: That sounds like a good way to protect our heritage.\nb. Anna: I think we should limit the number of visitors each day.\nc. Peter: I'm worried that tourists are damaging the old temple.",
            options: ["A. c-b-a","B. b-c-a","C. c-a-b","D. a-b-c"], answer: "A"
          },
          {
            id: "b6t3q12", num: 12,
            text: "Sắp xếp đúng thứ tự:\na. Tom: I'd love to join because I care about preserving our cultural heritage.\nb. Anna: Hi, Tom. Are you interested in joining the heritage protection club?\nc. Anna: We clean heritage sites and raise awareness in the local community.\nd. Tom: That sounds meaningful. What activities does the club organise?\ne. Anna: Great! We are meeting this Saturday at the local museum.",
            options: ["A. b-d-c-a-e","B. d-b-c-a-e","C. b-c-d-a-e","D. b-d-a-c-e"], answer: "A"
          },
          {
            id: "b6t3q13", num: 13,
            text: "Sắp xếp đúng thứ tự:\na. As a result, heritage preservation has become more accurate, efficient, and sustainable.\nb. Many museums now use AI systems to analyse data and monitor historical structures.\nc. However, human expertise remains essential to ensure cultural values are properly respected.\nd. Artificial intelligence has increasingly influenced how cultural heritage sites are managed worldwide.\ne. This technology helps experts detect damage earlier and plan effective conservation strategies.",
            options: ["A. d-b-e-a-c","B. b-d-e-a-c","C. d-e-b-a-c","D. d-b-a-e-c"], answer: "A"
          },
          {
            id: "b6t3q14", num: 14,
            text: "Sắp xếp đúng thứ tự:\na. Therefore, careful planning is crucial to balance development and heritage protection.\nb. Many individuals move to rural areas seeking improved quality of life and cultural authenticity.\nc. Counter-urbanisation has recently attracted attention as people reconsider living in overcrowded cities.\nd. However, unmanaged migration may threaten local landscapes and historical sites.\ne. This trend can support heritage preservation by revitalising traditional communities and practices.",
            options: ["A. c-b-e-d-a","B. b-c-e-d-a","C. c-e-b-d-a","D. c-b-d-e-a"], answer: "A"
          },
          {
            id: "b6t3q15", num: 15,
            text: "Sắp xếp đúng thứ tự:\na. Warm regards,\nb. I have strong communication skills and a deep interest in preserving local heritage.\nc. Dear Sir or Madam,\nd. This role would allow me to contribute positively while gaining valuable professional experience.\ne. I am writing to apply for the position of part-time tour guide advertised online.\nf. I would appreciate the opportunity to discuss my application in more detail.\ng. Nguyen Van A",
            options: ["A. c-e-b-d-f-a-g","B. c-b-e-d-f-a-g","C. e-c-b-d-f-a-g","D. c-e-d-b-f-a-g"], answer: "A"
          }
        ]
      },
      {
        id: "b6_task4",
        title: "Task 4: Đọc hiểu – Hue Monuments",
        type: "reading",
        passage: `The Complex of Hue Monuments is wholly owned by the Government of the Socialist Republic of Viet Nam. Guided by the 1972 Convention on the Protection of the World Cultural and Natural Heritage, the National Heritage Law, and a number of other provincial regulations and decisions, the Hue Monuments Conservation Centre is responsible for the management of the complex and the protection of its outstanding universal value.\n\nThe Complex of Hue Monuments is given special attention in the Socio-Economic Development Master Plan of Thua Thien Hue Province, which provides direction for the conservation and restoration of the complex through 2020. In addition, an Adjusted Planning Framework for the Complex of Hue Monuments (2010-2020) was approved by the Prime Minister on 7 June 2010. This should control any further infrastructure projects that could impact the property. The details of how this will protect the site should be explained in the Management Plan and it should be included in the regulatory framework for Hue (the Master Plan).\n\nIt is important that the works needed to minimise the negative impact of noise and visual pollution on the Minh Mang and Khai Dinh tombs and to reduce the impact of the new highway are completed. Any remaining illegal buildings within the site should be removed. In addition to development, climate change and natural disasters are other potential problems for the long-term management of the property. To reduce the impact of floods, three dams are being built upstream along the Perfume River. In addition, the traditional water network and drainage system within and around the Citadel will be restored, as a means to reduce the damage to the World Heritage property and protect its inhabitants from the risk of flood, and to restore the historic network of ponds and canals.\n\nThe level of tourism at the Hue Monuments is increasing to a point where it needs to be managed so as to be suitable with the capacity of the site. This issue should also be addressed in the Management Plan.`,
        questions: [
          { id: "b6t4q16", num: 16, text: "According to the passage, which organization is in charge of managing the Hue Monuments?", options: ["A. The Government of the Socialist Republic of Viet Nam.","B. The Hue Monuments Conservation Centre organization.","C. The Prime Minister of the Socialist Republic of Viet Nam.","D. The Convention on the Protection of World Heritage."], answer: "B" },
          { id: "b6t4q17", num: 17, text: "All of the following are mentioned as potential threats to the complex EXCEPT ______", options: ["A. the growing number of visitors to the heritage site.","B. the negative consequences of the new large highway.","C. the lack of interest from the provincial government.","D. the effects of climate change and natural disasters."], answer: "C" },
          { id: "b6t4q18", num: 18, text: "The word \"outstanding\" in paragraph 1 is closest in meaning to ______", options: ["A. exceptional","B. traditional","C. complicated","D. historical"], answer: "A" },
          { id: "b6t4q19", num: 19, text: "The word \"minimise\" in paragraph 3 is opposite in meaning to ______", options: ["A. decrease","B. maximise","C. maintain","D. regulate"], answer: "B" },
          { id: "b6t4q20", num: 20, text: "The word \"it\" in paragraph 4 refers to ______", options: ["A. the capacity","B. the monument","C. the tourism","D. the management"], answer: "C" },
          { id: "b6t4q21", num: 21, text: "Which of the following best paraphrases the underlined sentence in paragraph 2?", options: ["A. This framework is expected to limit new building works that may harm the site.","B. This plan will encourage more construction projects to improve the heritage area.","C. This decision will help the government build more infrastructure near the site.","D. This regulation is designed to promote the impact of modern projects on Hue."], answer: "A" },
          { id: "b6t4q22", num: 22, text: "In which paragraph does the author discuss the measures taken to deal with flooding?", options: ["A. Paragraph 1","B. Paragraph 2","C. Paragraph 3","D. Paragraph 4"], answer: "C" },
          { id: "b6t4q23", num: 23, text: "Which paragraph mentions the official documents that guide the conservation of the site?", options: ["A. Paragraph 1","B. Paragraph 2","C. Paragraph 3","D. Paragraph 4"], answer: "A" }
        ]
      }
    ]
  },
  {
    id: "bai7_code3",
    title: "Bài 7 – Gap Year / School-leavers (Code 3)",
    sections: [
      {
        id: "b7c3_task1",
        title: "Task 1: Điền từ – Gap Year",
        type: "cloze",
        passage: `Today, many students choose to take a gap year after finishing high school. Instead of starting university immediately, they spend one year travelling, working or joining volunteer projects. Supporters believe that this experience helps young people become more mature and build a sense of (1) __________ before entering higher education.\n\nIn countries like Australia and New Zealand, travelling abroad at a young age is quite common. Some students work part-time (2) __________ earn money for their trips. They may stay overseas for several months or even a year. During this time, they meet new people and learn about different cultures. Many programmes are available (3) __________ young travellers who want to explore the world safely. These experiences allow students to (4) __________ new skills and increase their confidence. After returning home, they often have valuable (5) __________ that will be helpful in their future careers.`,
        questions: [
          { id: "b7c3t1q1", num: 1, options: ["A. responsibility","B. pollution","C. temperature","D. luggage"], answer: "A" },
          { id: "b7c3t1q2", num: 2, options: ["A. because","B. although","C. to","D. unless"], answer: "C" },
          { id: "b7c3t1q3", num: 3, options: ["A. on","B. for","C. at","D. in"], answer: "B" },
          { id: "b7c3t1q4", num: 4, options: ["A. gain","B. lose","C. waste","D. break"], answer: "A" },
          { id: "b7c3t1q5", num: 5, options: ["A. uniform","B. traffic","C. advice","D. experience"], answer: "D" }
        ]
      },
      {
        id: "b7c3_task2",
        title: "Task 2: Điền từ – Apprenticeship Programmes",
        type: "cloze",
        passage: `Many school-leavers are interested in vocational education because it offers practical training and real work experience. In recent years, (1) __________ students have chosen apprenticeship programmes instead of traditional university courses. These programmes allow learners to combine studying with working in a company.\n\nStudents must consider (2) __________ carefully before applying, as they will need to balance work and study. Apprentices often (3) __________ new responsibilities at the workplace and learn directly from experienced workers. This type of training helps them become more confident and (4) __________ qualified technicians in their chosen field. As a result, graduates usually have better (5) __________ of finding stable employment after finishing the programme.`,
        questions: [
          { id: "b7c3t2q1", num: 1, options: ["A. much","B. little","C. many","D. a little"], answer: "C" },
          { id: "b7c3t2q2", num: 2, options: ["A. apply","B. to apply","C. applied","D. applying"], answer: "D" },
          { id: "b7c3t2q3", num: 3, options: ["A. take off","B. look after","C. take on","D. turn down"], answer: "C" },
          { id: "b7c3t2q4", num: 4, options: ["A. become","B. becoming","C. became","D. becomes"], answer: "A" },
          { id: "b7c3t2q5", num: 5, options: ["A. furniture","B. luggage","C. weather","D. chances"], answer: "D" }
        ]
      },
      {
        id: "b7c3_task3",
        title: "Task 3: Sắp xếp câu / đoạn hội thoại",
        type: "mcq",
        questions: [
          {
            id: "b7c3t3q11", num: 11,
            text: "Sắp xếp đúng thứ tự:\na. Hoa: \"What are you planning to do after leaving school?\"\nb. Minh: \"I'm thinking about enrolling in a local college.\"\nc. Hoa: \"That's a good idea. What subject will you choose?\"",
            options: ["A. b-a-c","B. a-c-b","C. a-b-c","D. c-a-b"], answer: "C"
          },
          {
            id: "b7c3t3q12", num: 12,
            text: "Sắp xếp đúng thứ tự:\na. David: \"Have you considered vocational education instead of university?\"\nb. Emma: \"Yes, because I want to develop practical skills quickly.\"\nc. David: \"That could help you find a job sooner.\"",
            options: ["A. b-a-c","B. c-a-b","C. a-c-b","D. a-b-c"], answer: "D"
          },
          {
            id: "b7c3t3q13", num: 13,
            text: "Sắp xếp đúng thứ tự:\na. Consequently, she explored institutions offering specialised programmes related to industry needs.\nb. After graduating from high school, Laura evaluated different post-secondary education options carefully.\nc. Ultimately, she selected a professional college combining theory and extensive workplace training.\nd. Although her parents preferred university education, she worried about tuition costs and debt.\ne. Moreover, she believed early practical experience would significantly enhance her employability.",
            options: ["A. d-b-e-a-c","B. b-e-d-a-c","C. e-b-d-a-c","D. b-d-e-a-c"], answer: "D"
          },
          {
            id: "b7c3t3q14", num: 14,
            text: "Sắp xếp đúng thứ tự:\na. Many school-leavers nowadays explore alternatives beyond traditional university degrees.\nb. Some choose to work immediately to gain income and real-life experience.\nc. Others register for vocational courses that focus on specific technical skills.\nd. These decisions allow students to respond effectively to changing labour market demands.\ne. Therefore, each student should assess personal goals before making final decisions.",
            options: ["A. a-c-b-d-e","B. a-b-c-d-e","C. b-a-c-d-e","D. a-b-d-c-e"], answer: "B"
          },
          {
            id: "b7c3t3q15", num: 15,
            text: "Sắp xếp đúng thứ tự:\na. I am writing to request information about apprenticeship programmes for recent school-leavers.\nb. Dear Admissions Officer,\nc. I would appreciate details regarding application procedures and eligibility criteria.\nd. Thank you for supporting students in making informed career decisions.\ne. I am particularly interested in programmes combining classroom study with practical training.\nf. Warm regards,\ng. Tran Mai",
            options: ["A. b-e-a-c-d-f-g","B. b-a-c-e-d-f-g","C. a-b-e-c-d-f-g","D. b-a-e-c-d-f-g"], answer: "D"
          }
        ]
      },
      {
        id: "b7c3_task4",
        title: "Task 4: Đọc hiểu – School to University",
        type: "reading",
        passage: `Getting into university is an important event for young people. While most students are excited about it, they should also be aware of the difference between university and school.\n\nAt school, most of your learning is done in the classroom. Teachers give you regular assignments and provide support and resources to help you complete them. Meanwhile, most of your learning at university involves self-studying and project work that you need to plan and complete by a certain date. It is your responsibility to review lecture notes, read textbooks, and do research to find information in the library or online.\n\nYour relationships at school are often limited to schoolmates or classmates. You interact with them mostly in a school environment; therefore, your group of friends is small and very familiar. By contrast, at university, you not only have more contacts, but you also meet people from different backgrounds. Therefore, you need better social skills to deal with any conflict you may come into when interacting with other people.\n\nAs a secondary school student, you also live with your parents who provide you with the daily care and support you need. You don't have to worry about things such as shopping or cooking for yourself. You have your parents take care of your physical and mental well-being. Once you go to university, you will probably move away from home and start to live independently. You need to improve your life skills so that you can manage your own life.`,
        questions: [
          { id: "b7c3t4q16", num: 16, text: "According to the passage, which of the following is TRUE about university study?", options: ["A. Students receive constant supervision from lecturers.","B. Students complete fewer projects than at school.","C. Students must plan and manage much of their own learning.","D. Students rarely use libraries for research."], answer: "C" },
          { id: "b7c3t4q17", num: 17, text: "Which of the following is NOT mentioned as a difference between school and university?", options: ["A. The range of people students meet.","B. The responsibility for daily living tasks.","C. The level of self-directed learning required.","D. The cost of university accommodation."], answer: "D" },
          { id: "b7c3t4q18", num: 18, text: "The word \"limited\" in paragraph 3 is closest in meaning to ______.", options: ["A. extended","B. varied","C. restricted","D. developed"], answer: "C" },
          { id: "b7c3t4q19", num: 19, text: "The word \"independently\" in paragraph 4 is OPPOSITE in meaning to ______.", options: ["A. confidently","B. separately","C. responsibly","D. dependently"], answer: "D" },
          { id: "b7c3t4q20", num: 20, text: "The word \"them\" in paragraph 2 refers to ______.", options: ["A. lecture notes","B. textbooks","C. research projects","D. regular assignments"], answer: "D" },
          { id: "b7c3t4q21", num: 21, text: "Which of the following best paraphrases the underlined sentence in paragraph 2?", options: ["A. Students are expected to take full responsibility for their academic tasks.","B. Lecturers regularly remind students to complete research.","C. Libraries provide all materials required for success.","D. Online study replaces traditional classroom learning."], answer: "A" },
          { id: "b7c3t4q22", num: 22, text: "In which paragraph does the author discuss the need to improve social skills?", options: ["A. Paragraph 1","B. Paragraph 2","C. Paragraph 3","D. Paragraph 4"], answer: "C" },
          { id: "b7c3t4q23", num: 23, text: "In which paragraph does the author mention parental care and daily support?", options: ["A. Paragraph 1","B. Paragraph 2","C. Paragraph 3","D. Paragraph 4"], answer: "D" }
        ]
      }
    ]
  },
  {
    id: "bai7_code4",
    title: "Bài 7 – Education Options for School-leavers (Code 4)",
    sections: [
      {
        id: "b7c4_task1",
        title: "Task 1: Điền từ – Education Options for School-leavers",
        type: "cloze",
        passage: `Leaving school is a significant milestone, and many school-leavers are faced with a wide range of education and career options. Some students choose to pursue an academic degree at university, while others prefer vocational education, which focuses more on practical training. Making the right (1) __________ at this stage can strongly influence a young person's future career path.\n\nVocational colleges often cooperate with local businesses to provide students with hands-on experience (2) __________ prepare them for the workplace. In addition, a number of training programmes are available (3) __________ those who wish to develop specialised skills in areas such as engineering, hospitality, or information technology. These programmes encourage learners to (4) __________ valuable experience through internships and workplace training. With appropriate qualifications and relevant experience, school-leavers can have greater (5) __________ for career advancement in a competitive job market.`,
        questions: [
          { id: "b7c4t1q1", num: 1, options: ["A. decision","B. homework","C. landscape","D. luggage"], answer: "A" },
          { id: "b7c4t1q2", num: 2, options: ["A. because","B. to","C. although","D. unless"], answer: "B" },
          { id: "b7c4t1q3", num: 3, options: ["A. at","B. in","C. on","D. for"], answer: "D" },
          { id: "b7c4t1q4", num: 4, options: ["A. earn","B. gain","C. collect","D. achieve"], answer: "B" },
          { id: "b7c4t1q5", num: 5, options: ["A. furniture","B. traffic","C. opportunities","D. weather"], answer: "C" }
        ]
      },
      {
        id: "b7c4_task2",
        title: "Task 2: Điền từ – Part-time Study Options",
        type: "cloze",
        passage: `For school-leavers who cannot attend full-time university, part-time education is a flexible alternative. (1) __________ young people choose this option because they need to support their families financially. By working during the day and studying in the evening, students can continue (2) __________ their qualifications without giving up their jobs.\n\nMany colleges (3) __________ flexible schedules to meet the needs of working learners. These programmes enable students to (4) __________ recognised qualifications while gaining practical experience. With determination and effort, learners can improve their career (5) __________ in the long term.`,
        questions: [
          { id: "b7c4t2q1", num: 1, options: ["A. Much","B. Several","C. Little","D. A little"], answer: "B" },
          { id: "b7c4t2q2", num: 2, options: ["A. improve","B. improvement","C. improved","D. improving"], answer: "D" },
          { id: "b7c4t2q3", num: 3, options: ["A. look up","B. turn off","C. offer","D. give up"], answer: "C" },
          { id: "b7c4t2q4", num: 4, options: ["A. obtain","B. obtaining","C. obtained","D. obtains"], answer: "A" },
          { id: "b7c4t2q5", num: 5, options: ["A. traffic","B. weather","C. luggage","D. prospects"], answer: "D" }
        ]
      },
      {
        id: "b7c4_task3",
        title: "Task 3: Sắp xếp câu / đoạn hội thoại",
        type: "mcq",
        questions: [
          {
            id: "b7c4t3q11", num: 11,
            text: "Sắp xếp đúng thứ tự:\na. Lan: \"Are you going to apply for university next year?\"\nb. Phong: \"No, I plan to attend a technical training centre.\"\nc. Lan: \"That sounds interesting. What course will you study?\"",
            options: ["A. a-c-b","B. b-a-c","C. c-a-b","D. a-b-c"], answer: "D"
          },
          {
            id: "b7c4t3q12", num: 12,
            text: "Sắp xếp đúng thứ tự:\na. Sarah: \"Do you think taking a gap year is helpful?\"\nb. Mark: \"It can be beneficial if students gain relevant experience.\"\nc. Sarah: \"Yes, it may help them clarify their future career choices.\"",
            options: ["A. a-b-c","B. b-a-c","C. a-c-b","D. c-a-b"], answer: "A"
          },
          {
            id: "b7c4t3q13", num: 13,
            text: "Sắp xếp đúng thứ tự:\na. As a result, he consulted career advisers and examined employment statistics thoroughly.\nb. After completing secondary school, Kevin hesitated between university and vocational training.\nc. Ultimately, he decided that practical training would provide quicker professional integration.\nd. While many classmates preferred academic degrees, he prioritised workplace competence.\ne. Furthermore, he realised that technical qualifications were increasingly valued in the labour market.",
            options: ["A. d-b-e-a-c","B. b-e-d-a-c","C. b-d-e-a-c","D. e-b-d-a-c"], answer: "C"
          },
          {
            id: "b7c4t3q14", num: 14,
            text: "Sắp xếp đúng thứ tự:\na. School-leavers today encounter numerous pathways when planning their educational futures.\nb. Some apply directly for full-time jobs in local companies.\nc. Others enrol in certificate programmes to develop specialised practical skills.\nd. These varied routes demonstrate that success does not depend solely on university education.\ne. Therefore, students must evaluate their strengths before choosing suitable options.",
            options: ["A. a-c-b-d-e","B. b-a-c-d-e","C. a-b-d-c-e","D. a-b-c-d-e"], answer: "D"
          },
          {
            id: "b7c4t3q15", num: 15,
            text: "Sắp xếp đúng thứ tự:\na. I am interested in receiving information about scholarships for vocational students.\nb. Dear Sir or Madam,\nc. Could you please inform me about application deadlines and required documents?\nd. I sincerely appreciate your assistance in guiding school-leavers.\ne. I am currently considering alternatives to university education after graduation.\nf. Warm regards,\ng. Nguyen Anh",
            options: ["A. b-a-e-c-d-f-g","B. b-e-a-c-d-f-g","C. a-b-e-c-d-f-g","D. b-e-c-a-d-f-g"], answer: "B"
          }
        ]
      },
      {
        id: "b7c4_task4",
        title: "Task 4: Đọc hiểu – Vocational Schools in Vietnam",
        type: "reading",
        passage: `Myriad occupational schools in the central coastal city of Da Nang have received just a small number of applications over the past few years. "Last year we only had 142 new students, but the number of new enrollees is 50 this school year," Truong Van Hung, rector of the Duc Tri Da Nang Vocational College, said, adding the school has set a target of recruiting 1,200 students for the 2014-2015 academic year. "Closing the school is just a matter of time," he said.\n\nSimilarly, the Viet A Vocational School in Hai Chau District in Da Nang has not recruited any new enrollee for over one year given the absence of job opportunities for its graduates. "We do not want to enroll because we cannot help students land jobs after they graduate," a leader of Viet A said. "We will only admit new students when we can have a partnership with companies who can employ our students after they finish their studies."\n\nElsewhere, vocational schools in the southern province of Dong Nai are 'frozen'. The Dong Nai Information Technology-Telecommunications Vocational School in the academic year of 2013-2014 enrolled only 82 students compared with a target of 1,000; the Nhon Trach Industrial Engineering Vocational School only had 200 out of its goal of 600 students for the school year; the 26-3 Vocational School received 150 students while they set a target of 250; and the South-Eastern Electromechanical Vocational School only recruited 300 out of the 500 students they planned to admit.\n\nThe situation means that equipment for training programs at those schools has been left unused and covered with rust. Local experts have commented that if the lack of students persists, vocational schools are at high risk of being closed, sooner or later.`,
        questions: [
          { id: "b7c4t4q16", num: 16, text: "According to the passage, which of the following is TRUE?", options: ["A. Duc Tri College reached its recruitment target easily.","B. Duc Tri College enrolled fewer students this year.","C. Viet A School increased its intake last year.","D. Dong Nai schools exceeded their planned numbers."], answer: "B" },
          { id: "b7c4t4q17", num: 17, text: "Which of the following is NOT mentioned as a consequence of low enrollment?", options: ["A. Equipment has been left unused and rusty.","B. Schools may face closure in the future.","C. Some schools cannot recruit new students.","D. Teachers receive higher salaries each term."], answer: "D" },
          { id: "b7c4t4q18", num: 18, text: "The word \"frozen\" in paragraph 3 is closest in meaning to ______.", options: ["A. melted","B. heated","C. stagnant","D. liquid"], answer: "C" },
          { id: "b7c4t4q19", num: 19, text: "The word \"persist\" in the last paragraph is closest in meaning to _____.", options: ["A. stop","B. vanish","C. reduce","D. continue"], answer: "D" },
          { id: "b7c4t4q20", num: 20, text: "The word \"they\" in paragraph 3 refers to _____.", options: ["A. local experts in Dong Nai Province","B. vocational schools in Dong Nai","C. training programs at those schools","D. companies hiring technical workers"], answer: "B" },
          { id: "b7c4t4q21", num: 21, text: "Which of the following best paraphrases the underlined sentence: \"Closing the school is just a matter of time\"?", options: ["A. The school might close if it changes policy.","B. The school has decided to expand soon.","C. The school will probably close in the near future.","D. The school has already been closed permanently."], answer: "C" },
          { id: "b7c4t4q22", num: 22, text: "In which paragraph does the author discuss the lack of job opportunities for graduates?", options: ["A. Paragraph 1","B. Paragraph 2","C. Paragraph 3","D. Paragraph 4"], answer: "B" },
          { id: "b7c4t4q23", num: 23, text: "In which paragraph does the author mention unused training equipment?", options: ["A. Paragraph 1","B. Paragraph 2","C. Paragraph 3","D. Paragraph 4"], answer: "D" }
        ]
      }
    ]
  }
];
