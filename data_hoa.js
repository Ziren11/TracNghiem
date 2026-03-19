// ===== HÓA HỌC 11 - BÀI 16, 17, 19, 20 =====
const examsHoa = [
  {
    id: "hoa_b16",
    title: "Hóa 11 – Bài 16: Hydrocarbon Không No",
    subject: "hoa",
    sections: [
      {
        id: "hoa_b16_nb",
        title: "Nhận Biết (20 câu)",
        type: "mcq",
        questions: [
          { id:"h16nb1", num:1, text:"Chọn khái niệm đúng về alkyne:", options:["A. Những hydrocarbon có 1 liên kết ba trong phân tử là alkyne.","B. Những hydrocarbon mạch hở có 1 liên kết ba trong phân tử là alkyne.","C. Alkyne là những hydrocarbon có liên kết đôi C=C trong phân tử.","D. Alkyne là những hydrocarbon mạch hở có liên kết đôi C=C trong phân tử."], answer:"B" },
          { id:"h16nb2", num:2, text:"Chọn khái niệm đúng về alkene:", options:["A. Những hydrocarbon có 1 liên kết đôi C=C trong phân tử là alkene.","B. Những hydrocarbon mạch hở có 1 liên kết đôi C=C trong phân tử là alkene.","C. Alkene là những hydrocarbon có liên kết ba trong phân tử.","D. Alkene là những hydrocarbon mạch hở có liên kết ba trong phân tử."], answer:"B" },
          { id:"h16nb3", num:3, text:"Hydrocarbon không no là những hydrocarbon mạch hở trong phân tử có chứa", options:["A. liên kết đơn.","B. liên kết π.","C. liên kết bội.","D. vòng benzene."], answer:"C" },
          { id:"h16nb4", num:4, text:"Trong phân tử ethylene liên kết đôi C=C giữa 2 carbon gồm:", options:["A. 1 liên kết π và 2 liên kết σ.","B. 2 liên kết π và 1 liên kết σ.","C. 1 liên kết π và 1 liên kết σ.","D. 2 liên kết π và 2 liên kết σ."], answer:"C" },
          { id:"h16nb5", num:5, text:"Alkyne là những hydrocarbon không no, mạch hở, có công thức chung là", options:["A. CnH2n+2 (n≥1).","B. CnH2n (n≥2).","C. CnH2n-2 (n≥2).","D. CnH2n-6 (n≥6)."], answer:"C" },
          { id:"h16nb6", num:6, text:"Alkene là những hydrocarbon không no, mạch hở, có công thức chung là", options:["A. CnH2n+2 (n≥1).","B. CnH2n (n≥2).","C. CnH2n-2 (n≥2).","D. CnH2n-6 (n≥6)."], answer:"B" },
          { id:"h16nb7", num:7, text:"Chất nào sau đây thuộc dãy đồng đẳng của alkene?", options:["A. C3H8.","B. C3H4.","C. C2H2.","D. C2H4."], answer:"D" },
          { id:"h16nb8", num:8, text:"Chất nào sau đây có thể chứa liên kết ba trong phân tử?", options:["A. C3H6.","B. C4H10.","C. C2H4.","D. C3H4."], answer:"D" },
          { id:"h16nb9", num:9, text:"Acetylene có công thức phân tử", options:["A. CH4.","B. C2H4.","C. C2H2.","D. C2H6."], answer:"C" },
          { id:"h16nb10", num:10, text:"Mô hình phân tử của chất X là ethylene. Tên gọi của chất X là", options:["A. ethylene.","B. acetylene.","C. propyne.","D. propene."], answer:"A" },
          { id:"h16nb11", num:11, text:"Phân tử C2H2 có chứa:", options:["A. 2 liên kết σ, 3 liên kết π.","B. 2 liên kết σ, 1 liên kết π.","C. 3 liên kết σ, 2 liên kết π.","D. 1 liên kết σ, 2 liên kết π."], answer:"C" },
          { id:"h16nb12", num:12, text:"Số liên kết π (pi) có trong phân tử vinylacetylene (CH2=CH–C≡CH) là", options:["A. 1.","B. 2.","C. 3.","D. 4."], answer:"C" },
          { id:"h16nb13", num:13, text:"Trong phân tử propene có số liên kết sigma (σ) là", options:["A. 7.","B. 9.","C. 8.","D. 6."], answer:"C" },
          { id:"h16nb14", num:14, text:"Các alkene không có tính chất vật lí đặc trưng nào sau đây?", options:["A. Tan tốt trong nước và các dung môi hữu cơ.","B. Có khối lượng riêng nhỏ hơn khối lượng riêng của nước.","C. Có nhiệt độ sôi thấp hơn alkane phân tử có cùng số nguyên tử carbon.","D. Không dẫn điện."], answer:"A" },
          { id:"h16nb15", num:15, text:"Propene có tên gọi khác là", options:["A. propylene.","B. propane.","C. acetylene.","D. ethylene."], answer:"A" },
          { id:"h16nb16", num:16, text:"Chất nào sau đây là đồng phân của CH≡C-CH2-CH3?", options:["A. CH≡C-CH3.","B. CH3-C≡C-CH3.","C. CH2=CH-CH2-CH3.","D. CH2=CH-C≡CH."], answer:"B" },
          { id:"h16nb17", num:17, text:"But-2-yne có công thức phân tử là", options:["A. C4H10.","B. C3H8.","C. C4H8.","D. C4H6."], answer:"D" },
          { id:"h16nb18", num:18, text:"Trong phòng thí nghiệm ethylene được điều chế từ chất nào sau đây?", options:["A. CH3CH2CH3.","B. CH3CH2OH.","C. CH3CH3.","D. CH3OH."], answer:"B" },
          { id:"h16nb19", num:19, text:"Chất nào có thể được dùng điều chế acetylene trong phòng thí nghiệm là", options:["A. ethyl alcohol.","B. calcium carbide.","C. aluminium carbide.","D. methane."], answer:"B" },
          { id:"h16nb20", num:20, text:"Trùng hợp hydrocarbon X thu được polyethylene (PE). Chất X là", options:["A. ethene.","B. but-1-ene.","C. but-2-yne.","D. buta-1,3-diene."], answer:"A" }
        ]
      },
      {
        id: "hoa_b16_tf_nb",
        title: "Đúng/Sai – Nhận Biết (5 câu)",
        type: "truefalse",
        questions: [
          { id:"h16tfnb1", num:1, stem:"Cho các phát biểu về alkene và alkyne:", items:{a:"Alkene là hydrocarbon mạch hở có một liên kết đôi C=C.",b:"Alkyne là hydrocarbon mạch hở có một liên kết ba C≡C.",c:"Công thức chung của alkene là CnH2n (n≥2).",d:"Công thức chung của alkyne là CnH2n+2 (n≥2)."}, answers:{a:"S",b:"D",c:"D",d:"S"} },
          { id:"h16tfnb2", num:2, stem:"Cho các phát biểu về liên kết trong phân tử ethylene (CH2=CH2):", items:{a:"Liên kết đôi C=C gồm 2 liên kết σ và 1 liên kết π.",b:"Liên kết đôi C=C gồm 1 liên kết σ và 1 liên kết π.",c:"Phân tử ethylene có tất cả 5 liên kết σ.",d:"Phân tử ethylene có tất cả 5 liên kết π."}, answers:{a:"S",b:"S",c:"D",d:"D"} },
          { id:"h16tfnb3", num:3, stem:"Cho các phát biểu về acetylene (C2H2):", items:{a:"Acetylene có công thức phân tử C2H4.",b:"Acetylene có công thức phân tử C2H2.",c:"Phân tử acetylene có 3 liên kết σ và 2 liên kết π.",d:"Phân tử acetylene có 2 liên kết σ và 3 liên kết π."}, answers:{a:"S",b:"S",c:"D",d:"D"} },
          { id:"h16tfnb4", num:4, stem:"Cho các phát biểu về tính chất vật lí của alkene:", items:{a:"Alkene tan tốt trong nước.",b:"Alkene có khối lượng riêng nhỏ hơn nước.",c:"Alkene C2–C4 là chất lỏng ở điều kiện thường.",d:"Alkene không dẫn điện."}, answers:{a:"D",b:"D",c:"S",d:"S"} },
          { id:"h16tfnb5", num:5, stem:"Cho các phát biểu về điều chế alkene và alkyne trong phòng thí nghiệm:", items:{a:"Ethylene được điều chế bằng cách đun nóng ethanol với H2SO4 đặc ở 170°C.",b:"Acetylene được điều chế từ calcium carbide và nước.",c:"Ethylene được điều chế từ calcium carbide.",d:"Acetylene được điều chế từ ethanol."}, answers:{a:"S",b:"D",c:"D",d:"S"} }
        ]
      },
      {
        id: "hoa_b16_tf_hieu",
        title: "Đúng/Sai – Hiểu (6 câu)",
        type: "truefalse",
        questions: [
          { id:"h16tfh1", num:1, stem:"Cho các phát biểu về phản ứng cộng của alkene:", items:{a:"Alkene cộng HBr theo quy tắc Markovnikov.",b:"Sản phẩm chính khi cho propene cộng HBr là 2-bromopropane.",c:"Alkene cộng H2O tạo alcohol.",d:"Ethylene cộng Br2 tạo 1,1-dibromoethane."}, answers:{a:"D",b:"D",c:"D",d:"S"} },
          { id:"h16tfh2", num:2, stem:"Cho các phát biểu về phản ứng của alkyne:", items:{a:"Alkyne có thể cộng H2 tạo alkene (xúc tác Lindlar).",b:"Alkyne đầu mạch (R-C≡CH) tạo kết tủa vàng với AgNO3/NH3.",c:"But-2-yne tạo kết tủa với AgNO3/NH3.",d:"Acetylene cộng H2O tạo acetaldehyde."}, answers:{a:"D",b:"D",c:"S",d:"D"} },
          { id:"h16tfh3", num:3, stem:"Cho các phát biểu về đồng phân hình học của alkene:", items:{a:"But-2-ene có đồng phân cis-trans.",b:"But-1-ene có đồng phân cis-trans.",c:"2-methylbut-2-ene không có đồng phân cis-trans.",d:"Prop-1-ene không có đồng phân cis-trans."}, answers:{a:"D",b:"D",c:"D",d:"D"} },
          { id:"h16tfh4", num:4, stem:"Cho các phát biểu về phản ứng oxi hóa alkene:", items:{a:"Ethylene không làm mất màu dung dịch KMnO4.",b:"Ethylene làm mất màu dung dịch KMnO4 tạo ethylene glycol.",c:"Alkene không bị oxi hóa bởi O2.",d:"Toluene làm mất màu dung dịch KMnO4 khi đun nóng."}, answers:{a:"S",b:"D",c:"S",d:"D"} },
          { id:"h16tfh5", num:5, stem:"Cho các phát biểu về phản ứng trùng hợp:", items:{a:"Ethylene trùng hợp tạo polyethylene (PE).",b:"Propylene trùng hợp tạo polypropylene (PP).",c:"Acetylene trùng hợp tạo polyacetylene.",d:"Alkane có thể tham gia phản ứng trùng hợp."}, answers:{a:"S",b:"S",c:"D",d:"D"} },
          { id:"h16tfh6", num:6, stem:"Cho các phát biểu về phân biệt alkane, alkene, alkyne:", items:{a:"Dùng dung dịch Br2 có thể phân biệt alkane với alkene.",b:"Dùng AgNO3/NH3 có thể phân biệt alkyne đầu mạch với alkyne giữa mạch.",c:"Dùng dung dịch KMnO4 không thể phân biệt alkene với alkyne.",d:"Dùng dung dịch Br2 và AgNO3/NH3 có thể phân biệt propane, propene, propyne."}, answers:{a:"D",b:"D",c:"S",d:"D"} }
        ]
      },
      {
        id: "hoa_b16_hieu",
        title: "Hiểu (20 câu)",
        type: "mcq",
        questions: [
          { id:"h16h1", num:1, text:"Chất X có công thức cấu tạo: CH3-CH(CH3)-CH=CH2. Tên thay thế của X là", options:["A. 3-methylbut-1-yne.","B. 3-methylbut-1-ene.","C. 2-methylbut-3-ene.","D. 2-methylbut-3-yne."], answer:"B" },
          { id:"h16h2", num:2, text:"Dẫn khí X từ từ vào nước bromine, thấy màu vàng nâu của nước bromine nhạt dần và mất màu. Khí X là", options:["A. methane.","B. ethane.","C. propane.","D. propene."], answer:"D" },
          { id:"h16h3", num:3, text:"Chất nào sau đây có đồng phân hình học?", options:["A. CH2=CH–CH=CH2.","B. CH3–CH=CH–CH2.","C. CH3–CH=C(CH3)2.","D. CH2=CH–CH2–CH3."], answer:"B" },
          { id:"h16h4", num:4, text:"Cho sơ đồ phản ứng: CH3–C≡CH + [Ag(NH3)2]OH → X + NH4NO3. Chất X có công thức cấu tạo là", options:["A. CH3–C–Ag≡C–Ag.","B. CH3–C≡C–Ag.","C. Ag–CH2–C≡C–Ag.","D. Ag–C≡C–Ag."], answer:"B" },
          { id:"h16h5", num:5, text:"Để phân biệt ethane và ethene, dùng phản ứng nào sau đây?", options:["A. Phản ứng cộng với nước bromine.","B. Phản ứng cộng với hydrogen.","C. Phản ứng đốt cháy.","D. Phản ứng trùng hợp."], answer:"A" },
          { id:"h16h6", num:6, text:"Theo quy tắc Zaitsev, sản phẩm chính của phản ứng tách HCl ra khỏi phân tử 2-chlorobutane?", options:["A. But-2-ene.","B. But-1-ene.","C. But-1,3-diene.","D. But-1-yne."], answer:"A" },
          { id:"h16h7", num:7, text:"Alkyne T có tên gọi theo danh pháp thay thế là", options:["A. 2-methylpent-3-yne.","B. Pent-2-yne.","C. 3-methylpent-2-yne.","D. Pent-3-yne."], answer:"C" },
          { id:"h16h8", num:8, text:"Có bao nhiêu đồng phân alkyne có công thức phân tử C6H10 tác dụng được với dung dịch AgNO3/NH3 tạo ra kết tủa màu vàng nhạt?", options:["A. 4.","B. 5.","C. 3.","D. 2."], answer:"C" },
          { id:"h16h9", num:9, text:"Oxi hoá ethylene bằng dung dịch KMnO4 thu được sản phẩm là:", options:["A. MnO2, C2H4(OH)2, KOH.","B. K2CO3, H2O, MnO2.","C. C2H5OH, MnO2, KOH.","D. C2H4(OH)2, K2CO3, MnO2."], answer:"A" },
          { id:"h16h10", num:10, text:"Để chuyển hoá alkyne thành alkene ta thực hiện phản ứng cộng H2 trong điều kiện có xúc tác:", options:["A. Ni, to.","B. Mn, to.","C. Lindlar, to.","D. Fe, to."], answer:"C" },
          { id:"h16h11", num:11, text:"Khi cho but-1-ene tác dụng với dung dịch HBr, sản phẩm nào sau đây là sản phẩm chính?", options:["A. CH3–CH2–CHBr–CH2Br.","B. CH3–CH2–CHBr–CH3.","C. CH2Br–CH2–CH2–CH2Br.","D. CH3–CH2–CH2–CH2Br."], answer:"B" },
          { id:"h16h12", num:12, text:"Khi cho ethyne tác dụng với hydrogen có xúc tác Ni, đun nóng sản phẩm thu được có tên gọi là:", options:["A. Ethane.","B. Ethyne.","C. Ethene.","D. Methane."], answer:"A" },
          { id:"h16h13", num:13, text:"Dẫn khí ethene qua dung dịch bromine thấy dung dịch bị mất màu. Sản phẩm tạo ra là chất nào?", options:["A. CH3-CH2Br.","B. CH2Br-CH2Br.","C. CH3-CHBr2.","D. CHBr2-CHBr2."], answer:"B" },
          { id:"h16h14", num:14, text:"Thí nghiệm sục khí acetylene vào dung dịch AgNO3 trong NH3. Hiện tượng xảy ra trong bình là", options:["A. có kết tủa màu nâu đỏ.","B. có kết tủa màu vàng nhạt.","C. dung dịch chuyển sang màu da cam.","D. dung dịch chuyển sang màu xanh lam."], answer:"B" },
          { id:"h16h15", num:15, text:"Phát biểu nào sau đây không đúng?", options:["A. Acetylene và propyne đều tạo kết tủa với AgNO3/NH3.","B. Propane cho phản ứng cộng HCl.","C. But-1-ene có thể làm mất màu dung dịch KMnO4.","D. Ethene và propene đều có thể làm mất màu dung dịch Br2."], answer:"B" },
          { id:"h16h16", num:16, text:"Có 4 chất: methane, ethylene, but-1-yne, but-2-yne. Trong 4 đó có mấy chất tác dụng với dung dịch Br2?", options:["A. 3.","B. 4.","C. 2.","D. 1."], answer:"A" },
          { id:"h16h17", num:17, text:"Cho các hydrocarbon mạch hở sau: C4H10, C4H6, C4H8, C3H4. Những hydrocarbon nào có thể tạo kết tủa với dung dịch AgNO3/NH3?", options:["A. C4H10, C4H8.","B. C4H6, C3H4.","C. Chỉ có C4H6.","D. Chỉ có C3H4."], answer:"B" },
          { id:"h16h18", num:18, text:"Để phân biệt but-1-yne và but-2-yne, người ta dùng thuốc thử nào sau đây?", options:["A. dung dịch Br2.","B. dung dịch KMnO4.","C. dung dịch AgNO3/NH3.","D. Khí H2."], answer:"C" },
          { id:"h16h19", num:19, text:"Hợp chất X mạch hở có công thức phân tử C4H8 khi tác dụng với HCl cho một sản phẩm duy nhất. Công thức cấu tạo của X là", options:["A. CH3CH=CHCH3.","B. CH3CH=C(CH3)2.","C. CH2=C(CH3)2.","D. CH2=CHCH2CH3."], answer:"C" },
          { id:"h16h20", num:20, text:"Để phân biệt propene, propyne, propane. Người ta dùng các thuốc thử nào đây:", options:["A. dung dịch Br2 và KMnO4.","B. dung dịch KMnO4 / khí H2.","C. dung dịch AgNO3/NH3 và Ca(OH)2.","D. dung dịch AgNO3/NH3 và dung dịch Br2."], answer:"D" }
        ]
      }
    ]
  },
  {
    id: "hoa_b17",
    title: "Hóa 11 – Bài 17: Arene",
    subject: "hoa",
    sections: [
      {
        id: "hoa_b17_tf",
        title: "Đúng/Sai (10 câu)",
        type: "truefalse",
        questions: [
          { id:"h17tf1", num:1, stem:"Cho các phát biểu về cấu tạo benzene:", items:{a:"Phân tử benzene có 6 nguyên tử C tạo thành hình lục giác đều.",b:"Tất cả nguyên tử C và H trong benzene đều nằm trên một mặt phẳng.",c:"Các góc liên kết trong benzene đều bằng 109,5°.",d:"Các liên kết C–C trong benzene đều có độ dài bằng nhau."}, answers:{a:"D",b:"S",c:"S",d:"D"} },
          { id:"h17tf2", num:2, stem:"Cho các phát biểu về tính chất hóa học của benzene:", items:{a:"Benzene không làm mất màu dung dịch KMnO4 ở điều kiện thường.",b:"Benzene tác dụng với Br2 (xúc tác FeBr3) tạo bromobenzene.",c:"Benzene tác dụng với dung dịch Br2 ở điều kiện thường.",d:"Benzene cộng Cl2 khi chiếu sáng tạo C6H6Cl6."}, answers:{a:"D",b:"S",c:"D",d:"S"} },
          { id:"h17tf3", num:3, stem:"Cho các phát biểu về toluene (C6H5CH3):", items:{a:"Toluene là đồng đẳng của benzene.",b:"Toluene làm mất màu dung dịch KMnO4 khi đun nóng.",c:"Toluene tác dụng với HNO3 đặc/H2SO4 đặc tạo TNT.",d:"Toluene không tác dụng với dung dịch Br2 ở điều kiện thường."}, answers:{a:"D",b:"D",c:"D",d:"D"} },
          { id:"h17tf4", num:4, stem:"Cho các phát biểu về styrene (C6H5CH=CH2):", items:{a:"Styrene là đồng đẳng của benzene.",b:"Styrene làm mất màu dung dịch KMnO4 ở điều kiện thường.",c:"Styrene có thể tham gia phản ứng trùng hợp.",d:"Styrene không tác dụng với dung dịch Br2."}, answers:{a:"S",b:"D",c:"D",d:"D"} },
          { id:"h17tf5", num:5, stem:"Cho hỗn hợp X gồm hai chất hữu cơ có vòng benzene. Biết X, Y là sản phẩm của phản ứng halogen hóa toluene:", items:{a:"X và Y có cùng công thức phân tử.",b:"X là C7H7Cl khi thực hiện phản ứng với Cl2/FeCl3.",c:"Tên của X, Y lần lượt là o-chlorotoluene và p-chlorotoluene.",d:"Oxi hóa toluene bằng KMnO4 đun nóng thu được C6H5COOH."}, answers:{a:"S",b:"S",c:"D",d:"D"} },
          { id:"h17tf6", num:6, stem:"Cho các phát biểu về p-xylene (C8H10):", items:{a:"p-xylene có công thức phân tử C8H8.",b:"p-xylene là đồng đẳng của benzene.",c:"p-xylene không làm mất màu dung dịch KMnO4 ở điều kiện thường.",d:"p-xylene tác dụng với KMnO4 đun nóng tạo muối dicarboxylate."}, answers:{a:"S",b:"D",c:"S",d:"D"} },
          { id:"h17tf7", num:7, stem:"Cho các phát biểu về naphthalene (C10H8):", items:{a:"Naphthalene là hydrocarbon thơm đa vòng.",b:"Naphthalene được điều chế chủ yếu từ nhựa than đá.",c:"Naphthalene có thể cộng tối đa 5 mol H2.",d:"Naphthalene không tác dụng với dung dịch Br2 ở điều kiện thường."}, answers:{a:"D",b:"D",c:"D",d:"S"} },
          { id:"h17tf8", num:8, stem:"Cho các phát biểu về phản ứng thế trên vòng benzene:", items:{a:"Phản ứng nitro hóa benzene cần xúc tác H2SO4 đặc.",b:"Phản ứng halogen hóa benzene cần xúc tác halide kim loại.",c:"Nhóm alkyl trên vòng benzene định hướng thế vào vị trí ortho và para.",d:"Phản ứng thế trên vòng benzene là phản ứng thế electrophile."}, answers:{a:"S",b:"S",c:"S",d:"D"} },
          { id:"h17tf9", num:9, stem:"Cho các phát biểu về đồng đẳng của benzene:", items:{a:"Công thức chung của dãy đồng đẳng benzene là CnH2n-6 (n≥6).",b:"Ethylbenzene và o-xylene là đồng phân của nhau.",c:"Styrene là đồng đẳng của benzene.",d:"Toluene có công thức phân tử C7H8."}, answers:{a:"D",b:"D",c:"S",d:"S"} },
          { id:"h17tf10", num:10, stem:"Cho các phát biểu về ứng dụng và điều chế arene:", items:{a:"Benzene được dùng làm dung môi trong công nghiệp.",b:"Toluene được dùng điều chế thuốc nổ TNT.",c:"Styrene được dùng điều chế polystyrene (PS).",d:"Benzene và toluene không gây hại cho sức khỏe."}, answers:{a:"D",b:"D",c:"D",d:"D"} }
        ]
      },
      {
        id: "hoa_b17_nb",
        title: "Nhận Biết (19 câu)",
        type: "mcq",
        questions: [
          { id:"h17nb1", num:1, text:"Công thức phân tử của benzene là", options:["A. C6H6.","B. C7H8.","C. C8H8.","D. C7H9."], answer:"A" },
          { id:"h17nb2", num:2, text:"Trong phân tử benzene", options:["A. 6 nguyên tử H và 6 nguyên tử C đều nằm trên 1 mặt phẳng.","B. 6 nguyên tử H nằm trên cùng một mặt phẳng khác với mặt phẳng của 6 nguyên tử C.","C. Chỉ có 6 nguyên tử C nằm trong cùng một mặt phẳng.","D. Chỉ có 6 nguyên tử H nằm trong cùng một mặt phẳng."], answer:"A" },
          { id:"h17nb3", num:3, text:"Tên gọi của styrene (C6H5-CH=CH2) là", options:["A. toluene.","B. vinyltoluene.","C. styrene.","D. ethylbenzene."], answer:"C" },
          { id:"h17nb4", num:4, text:"Công thức phân tử nào dưới đây không thể là của một arene?", options:["A. C7H8.","B. C10H8.","C. C11H18.","D. C8H8."], answer:"C" },
          { id:"h17nb5", num:5, text:"Trong phân tử toluene, có bao nhiêu liên kết đôi C=C?", options:["A. 2.","B. 3.","C. 4.","D. 5."], answer:"B" },
          { id:"h17nb6", num:6, text:"Đặc điểm của các alkylbenzene là hydrocarbon có chứa", options:["A. gốc allyl và vòng benzene.","B. gốc alkyl và hai vòng benzene.","C. gốc alkyl và một vòng benzene.","D. hai vòng benzene."], answer:"C" },
          { id:"h17nb7", num:7, text:"Dãy đồng đẳng của benzene (gồm benzene và alkylbenzene) có công thức chung là", options:["A. CnH2n+6 (n≥6).","B. CnH2n-6 (n≥3).","C. CnH2n-8 (n≥8).","D. CnH2n-6 (n≥6)."], answer:"D" },
          { id:"h17nb8", num:8, text:"Phát biểu nào sau đây đúng về styrene?", options:["A. Styrene là đồng đẳng của benzene.","B. Styrene là đồng đẳng của ethylene.","C. Styrene là hydrocarbon thơm.","D. Styrene là hydrocarbon không no, mạch hở."], answer:"C" },
          { id:"h17nb9", num:9, text:"Hoạt tính sinh học của benzene, toluene", options:["A. tùy thuộc vào nhiệt độ có thể gây hại hoặc không gây hại.","B. không gây hại cho sức khỏe.","C. gây ảnh hưởng tốt cho sức khỏe.","D. gây hại cho sức khỏe nếu tiếp xúc trong thời gian dài."], answer:"D" },
          { id:"h17nb10", num:10, text:"Phát biểu nào sau đây đúng về benzene?", options:["A. Benzene là một dẫn xuất của hydrocarbon.","B. Benzene là một hydrocarbon no.","C. Benzene là một hydrocarbon không no, mạch hở.","D. Benzene là một hydrocarbon thơm."], answer:"D" },
          { id:"h17nb11", num:11, text:"Benzene tác dụng được với chất nào sau đây ở điều kiện thích hợp?", options:["A. Dung dịch Br2.","B. NaCl khan.","C. Br2/FeBr3, to.","D. Dung dịch NaOH."], answer:"C" },
          { id:"h17nb12", num:12, text:"A là đồng đẳng của benzene có công thức nguyên là (C3H4)n. Công thức phân tử của A là:", options:["A. C3H4.","B. C6H8.","C. C9H12.","D. C12H16."], answer:"C" },
          { id:"h17nb13", num:13, text:"Trong điều kiện có chiếu sáng, benzene cộng hợp với chlorine tạo thành hợp chất nào sau đây?", options:["A. C6H5Cl.","B. C6H4Cl2.","C. C6H6Cl6.","D. C6H12Cl6."], answer:"C" },
          { id:"h17nb14", num:14, text:"Naphthalene được điều chế chủ yếu bằng phương pháp nào sau đây?", options:["A. Chưng cất dầu mỏ.","B. Chưng cất nhựa than đá.","C. Đốt cháy nhựa đường.","D. Reforming."], answer:"B" },
          { id:"h17nb15", num:15, text:"Điều nào sau đây không đúng khi nói về 2 vị trí trên 1 vòng benzene?", options:["A. vị trí 1,2 gọi là ortho.","B. vị trí 1,4 gọi là para.","C. vị trí 1,3 gọi là meta.","D. vị trí 2,5 gọi là ortho."], answer:"D" },
          { id:"h17nb16", num:16, text:"Chất nào sau đây làm mất màu dung dịch KMnO4 ở nhiệt độ thường?", options:["A. Benzene.","B. Toluene.","C. Styrene.","D. Methane."], answer:"C" },
          { id:"h17nb17", num:17, text:"Nhận định nào sau đây về cấu tạo của phân tử benzene không đúng?", options:["A. Phân tử benzene có 6 nguyên tử carbon tạo thành hình lục giác đều.","B. Tất cả nguyên tử carbon và hydrogen đều nằm trên một mặt phẳng.","C. Các góc liên kết đều bằng 109,5°.","D. Các độ dài liên kết carbon-carbon đều bằng nhau."], answer:"C" }
        ]
      },
      {
        id: "hoa_b17_hieu",
        title: "Hiểu (20 câu)",
        type: "mcq",
        questions: [
          { id:"h17h1", num:1, text:"Benzene không tham gia phản ứng hóa học nào sau đây?", options:["A. Tác dụng với Br2 (to, FeBr3).","B. Tác dụng với HNO3 (đ)/H2SO4(đ).","C. Tác dụng với dung dịch KMnO4.","D. Tác dụng với Cl2 (as)."], answer:"C" },
          { id:"h17h2", num:2, text:"Thuốc nổ TNT (2,4,6-trinitrotoluene) được điều chế trực tiếp từ", options:["A. benzene.","B. methylbenzene.","C. vinylbenzene.","D. p-xylene."], answer:"B" },
          { id:"h17h3", num:3, text:"Toluene + dung dịch KMnO4 (to), sản phẩm hữu cơ thu được là", options:["A. C6H5-COOH.","B. C6H5-COOK.","C. C6H5-CH2-COOK.","D. C6H5-CH2-COOH."], answer:"A" },
          { id:"h17h4", num:4, text:"Xét các chất: (a) toluene; (b) o-xylene; (c) ethylbenzene; (d) m-dimethylbenzene; (e) styrene. Đồng đẳng của benzene là:", options:["A. (a), (d).","B. (a), (e).","C. (a), (b), (c), (d).","D. (a), (b), (c), (e)."], answer:"C" },
          { id:"h17h5", num:5, text:"Ứng với công thức phân tử C7H8 có bao nhiêu cấu tạo chứa vòng benzene?", options:["A. 2.","B. 3.","C. 1.","D. 4."], answer:"C" },
          { id:"h17h6", num:6, text:"Ứng với công thức phân tử C8H10 có bao nhiêu cấu tạo chứa vòng benzene?", options:["A. 2.","B. 3.","C. 4.","D. 5."], answer:"C" },
          { id:"h17h7", num:7, text:"Công thức tổng quát của hydrocarbon CnH2n+2-2a. Đối với naphthalene, giá trị của n và a lần lượt là", options:["A. 10 và 5.","B. 10 và 6.","C. 10 và 7.","D. 10 và 8."], answer:"C" },
          { id:"h17h8", num:8, text:"Ứng với công thức C9H12 có bao nhiêu đồng phân có cấu tạo chứa vòng benzene?", options:["A. 6.","B. 7.","C. 8.","D. 9."], answer:"A" },
          { id:"h17h9", num:9, text:"Cho phản ứng: A + 4H2 → ethyl cyclohexane. Cấu tạo của A là", options:["A. C6H5CH2CH3.","B. C6H5CH3.","C. C6H5CH2CH=CH2.","D. C6H5CH=CH2."], answer:"A" },
          { id:"h17h10", num:10, text:"Xét phản ứng: C6H5CH3 + KMnO4 → C6H5COOK + MnO2 + KOH + H2O. Tổng hệ số (nguyên, nhỏ nhất) các chất trong phương trình trên là", options:["A. 10.","B. 9.","C. 12.","D. 8."], answer:"A" },
          { id:"h17h11", num:11, text:"Để phân biệt benzene, toluene, styrene ta chỉ dùng 1 thuốc thử duy nhất là", options:["A. Dung dịch Br2.","B. Br2 (xúc tác FeBr3).","C. Dung dịch KMnO4.","D. Dung dịch Br2 hoặc dung dịch KMnO4."], answer:"C" },
          { id:"h17h12", num:12, text:"Một hỗn hợp X gồm 2 arene A, R đều có M < 120, tỉ khối của X đối với C2H6 là 3,067. Công thức phân tử và số công thức cấu tạo của A và R thỏa mãn là", options:["A. C6H6 (1 công thức); C7H8 (1 công thức).","B. C7H8 (1 công thức); C8H10 (4 công thức).","C. C6H6 (1 công thức); C8H10 (2 công thức).","D. C6H6 (1 công thức); C8H10 (4 công thức)."], answer:"D" },
          { id:"h17h13", num:13, text:"A là dẫn xuất benzene có công thức nguyên (CH)n. 1 mol A cộng tối đa 4 mol H2 hoặc 1 mol Br2 (dd). Vậy A là", options:["A. ethyl benzene.","B. methyl benzene.","C. vinyl benzene.","D. alkyl benzene."], answer:"C" },
          { id:"h17h14", num:14, text:"Giá trị nào dưới đây phù hợp với độ dài liên kết giữa carbon và carbon trong phân tử benzene?", options:["A. 125 pm.","B. 132 pm.","C. 160 pm.","D. 139 pm."], answer:"D" },
          { id:"h17h15", num:15, text:"Phân tử chất nào sau đây có thể cộng thêm 5 phân tử H2 (xúc tác Ni, đun nóng)?", options:["A. Benzene.","B. Toluene.","C. Styrene.","D. Naphthalene."], answer:"D" },
          { id:"h17h16", num:16, text:"Chất nào sau đây có thể làm nhạt màu dung dịch Br2 trong CCl4 ở điều kiện thường?", options:["A. Benzene.","B. Toluene.","C. Styrene.","D. Naphthalene."], answer:"C" },
          { id:"h17h17", num:17, text:"Chất nào sau đây khi tác dụng với hỗn hợp HNO3 (đ)/H2SO4(đ) nóng tạo một sản phẩm mononitro hoá duy nhất?", options:["A. Benzene.","B. Toluene.","C. o-xylene.","D. Naphthalene."], answer:"A" },
          { id:"h17h18", num:18, text:"Phản ứng giữa toluene và chlorine khi được chiếu sáng tạo sản phẩm là", options:["A. o-chlorotoluene.","B. p-chlorotoluene.","C. benzyl chloride.","D. 2,4-dichlorotoluene."], answer:"C" },
          { id:"h17h19", num:19, text:"Đun nóng toluene với dung dịch KMnO4 nóng, thì tỉ lệ mol KMnO4 sinh ra so với C6H5COOK phản ứng bằng", options:["A. 1:2.","B. 2:1.","C. 2:3.","D. 3:2."], answer:"B" },
          { id:"h17h20", num:20, text:"Đun nóng hydrocarbon thơm có công thức phân tử C8H10 với dung dịch KMnO4 nóng thu được dung dịch có chứa C6H5COOK và K2CO3. Chất C8H10 là", options:["A. o-xylene.","B. p-xylene.","C. ethyl benzene.","D. styrene."], answer:"C" }
        ]
      }
    ]
  },
  {
    id: "hoa_b19",
    title: "Hóa 11 – Bài 19: Dẫn Xuất Halogen",
    subject: "hoa",
    sections: [
      {
        id: "hoa_b19_tf_nb",
        title: "Đúng/Sai – Nhận Biết (5 câu)",
        type: "truefalse",
        questions: [
          { id:"h19tfnb1", num:1, stem:"Cho các phát biểu về dẫn xuất halogen:", items:{a:"Dẫn xuất halogen là hợp chất thu được khi thay thế nguyên tử H trong hydrocarbon bằng nguyên tử halogen.",b:"Chloroform (CHCl3) là dẫn xuất halogen của methane.",c:"C6H5Cl là dẫn xuất halogen của benzene.",d:"CH3COOH là dẫn xuất halogen của hydrocarbon."}, answers:{a:"D",b:"D",c:"D",d:"S"} },
          { id:"h19tfnb2", num:2, stem:"Cho các phát biểu về bậc của dẫn xuất halogen:", items:{a:"Bậc của dẫn xuất halogen bằng bậc của nguyên tử carbon liên kết với halogen.",b:"CH3CH2Cl là dẫn xuất halogen bậc I.",c:"(CH3)2CHCl là dẫn xuất halogen bậc II.",d:"(CH3)3CCl là dẫn xuất halogen bậc I."}, answers:{a:"S",b:"D",c:"D",d:"D"} },
          { id:"h19tfnb3", num:3, stem:"Cho các phát biểu về tính chất vật lí của dẫn xuất halogen:", items:{a:"Dẫn xuất halogen thường không tan trong nước.",b:"Nhiệt độ sôi của dẫn xuất halogen tăng theo chiều tăng của phân tử khối.",c:"Dẫn xuất halogen tan tốt trong dung môi hữu cơ.",d:"Tất cả dẫn xuất halogen đều là chất lỏng ở điều kiện thường."}, answers:{a:"D",b:"D",c:"D",d:"D"} },
          { id:"h19tfnb4", num:4, stem:"Cho các phát biểu về phản ứng thủy phân dẫn xuất halogen:", items:{a:"CH3CH2Cl thủy phân trong NaOH loãng tạo ethanol.",b:"C6H5Cl thủy phân trong NaOH loãng tạo phenol.",c:"C6H5CH2Cl thủy phân trong NaOH loãng tạo benzyl alcohol.",d:"CH2=CHCl thủy phân trong NaOH loãng tạo vinyl alcohol."}, answers:{a:"D",b:"S",c:"S",d:"D"} },
          { id:"h19tfnb5", num:5, stem:"Cho các phát biểu về ứng dụng của dẫn xuất halogen:", items:{a:"CFC được dùng làm chất làm lạnh trong điều hòa không khí.",b:"DDT là thuốc trừ sâu bị cấm sử dụng vì gây ô nhiễm môi trường.",c:"PVC được điều chế từ vinyl chloride.",d:"Chloroform được dùng làm thuốc gây mê trong y tế hiện đại."}, answers:{a:"D",b:"D",c:"D",d:"S"} }
        ]
      },
      {
        id: "hoa_b19_tf_hieu",
        title: "Đúng/Sai – Hiểu (5 câu)",
        type: "truefalse",
        questions: [
          { id:"h19tfh1", num:1, stem:"Cho các phát biểu về phản ứng tách HX của dẫn xuất halogen:", items:{a:"Phản ứng tách HX xảy ra khi đun nóng dẫn xuất halogen với KOH/ethanol.",b:"Theo quy tắc Zaitsev, sản phẩm chính là alkene có liên kết đôi ít bị thế hơn.",c:"2-bromobutane tách HBr tạo sản phẩm chính là but-2-ene.",d:"Phản ứng tách HX tạo ra alkene."}, answers:{a:"D",b:"D",c:"S",d:"D"} },
          { id:"h19tfh2", num:2, stem:"Cho các phát biểu về khả năng phản ứng của dẫn xuất halogen:", items:{a:"Dẫn xuất halogen vinyl (CH2=CHX) khó thủy phân hơn dẫn xuất halogen alkyl.",b:"Dẫn xuất halogen aryl (C6H5X) dễ thủy phân hơn dẫn xuất halogen alkyl.",c:"Dẫn xuất halogen allyl (CH2=CHCH2X) dễ thủy phân hơn dẫn xuất halogen alkyl.",d:"Độ bền liên kết C–X giảm dần từ C–F đến C–I."}, answers:{a:"D",b:"S",c:"D",d:"S"} },
          { id:"h19tfh3", num:3, stem:"Cho các phát biểu về nhận biết dẫn xuất halogen:", items:{a:"Đun sôi dẫn xuất halogen với NaOH loãng, sau đó thêm AgNO3 có thể nhận biết ion halide.",b:"Dẫn xuất halogen vinyl không cho kết tủa với AgNO3 sau khi thủy phân trong NaOH loãng.",c:"Dẫn xuất halogen aryl không cho kết tủa với AgNO3 sau khi thủy phân trong NaOH loãng.",d:"Dẫn xuất halogen allyl cho kết tủa với AgNO3 sau khi thủy phân trong NaOH loãng."}, answers:{a:"D",b:"D",c:"D",d:"D"} },
          { id:"h19tfh4", num:4, stem:"Cho các phát biểu về dẫn xuất halogen thơm:", items:{a:"C6H5Cl (chlorobenzene) không tác dụng với NaOH loãng.",b:"C6H5CH2Cl (benzyl chloride) tác dụng với NaOH loãng tạo benzyl alcohol.",c:"C6H5Cl tác dụng với NaOH đặc, nhiệt độ cao, áp suất cao tạo phenol.",d:"Benzyl chloride khó thủy phân hơn chlorobenzene."}, answers:{a:"D",b:"S",c:"D",d:"S"} },
          { id:"h19tfh5", num:5, stem:"Cho các phát biểu về ảnh hưởng của halogen đến môi trường:", items:{a:"CFC phá hủy tầng ozone.",b:"DDT tích lũy trong chuỗi thức ăn gây hại cho sinh vật.",c:"Dioxin là chất độc hại sinh ra khi đốt rác thải chứa PVC.",d:"Tất cả dẫn xuất halogen đều gây hại cho môi trường."}, answers:{a:"D",b:"S",c:"D",d:"D"} }
        ]
      },
      {
        id: "hoa_b19_nb",
        title: "Nhận Biết (20 câu)",
        type: "mcq",
        questions: [
          { id:"h19nb1", num:1, text:"Số đồng phân của C4H9Br là", options:["A. 4.","B. 2.","C. 3.","D. 5."], answer:"A" },
          { id:"h19nb2", num:2, text:"Số đồng phân dẫn xuất halogen bậc I có CTPT C4H9Cl là", options:["A. 2.","B. 3.","C. 4.","D. 5."], answer:"A" },
          { id:"h19nb3", num:3, text:"Số đồng phân mạch hở (kể cả đồng phân hình học) của chất có CTPT là C3H5Br là", options:["A. 2.","B. 3.","C. 4.","D. 5."], answer:"D" },
          { id:"h19nb4", num:4, text:"Dẫn xuất halogen không có đồng phân cis-trans là", options:["A. CHCl=CHCl.","B. CH2=CH-CH2F.","C. CH3CH=CBrCH3.","D. CH3CH2CH=CHCHClCH3."], answer:"B" },
          { id:"h19nb5", num:5, text:"Danh pháp IUPAC của dẫn xuất halogen có công thức cấu tạo: ClCH2CH(CH3)CHClCH3 là", options:["A. 1,3-dichloro-2-methylbutane.","B. 2,4-dichloro-3-methylbutane.","C. 1,3-dichloropentane.","D. 2,4-dichloro-2-methylbutane."], answer:"A" },
          { id:"h19nb6", num:6, text:"Tên gọi của các chất C6H5CH2Cl; CH3CHClCH3; Br2CHCH3; CH2=CHCH2Cl lần lượt là", options:["A. benzyl chloride; isopropyl chloride; 1,1-dibromoethane; allyl chloride.","B. benzyl chloride; 2-chloropropane; 1,2-dibromoethane; 1-chloroprop-2-ene.","C. phenyl chloride; isopropylchloride; 1,1-dibromoethane; 1-chloroprop-2-ene.","D. benzyl chloride; n-propyl chloride; 1,1-dibromoethane; 1-chloroprop-2-ene."], answer:"A" },
          { id:"h19nb7", num:7, text:"Hợp chất thuộc loại dẫn xuất halogen của hydrocarbon là", options:["A. HIO4.","B. C3H3N.","C. CH2BrCl.","D. C6H6O."], answer:"C" },
          { id:"h19nb8", num:8, text:"Thủy phân dẫn xuất halogen nào sau đây sẽ thu được alcohol? (1) CH3CH2Cl. (2) CH3CH=CHCl. (3) C6H5CH2Cl. (4) C6H5Cl.", options:["A. (1), (3).","B. (1), (2), (3).","C. (1), (2), (4).","D. (1), (2), (3), (4)."], answer:"A" },
          { id:"h19nb9", num:9, text:"Sản phẩm chính của phản ứng giữa propene và dung dịch nước (Cl2 + H2O) là:", options:["A. CH3-CHCl-CH3.","B. CH3-CH(OH)-CH3.","C. CH3-CHCl-CH2OH.","D. CH3-CH(OH)-CH2Cl."], answer:"D" },
          { id:"h19nb10", num:10, text:"Chất nào sau đây không phải là dẫn xuất halogen của hydrocarbon:", options:["A. CH2=CH-CH2-Br.","B. Cl-CHBr-CF3.","C. CHCl2-CF2-O-CH3.","D. C6H6Cl6."], answer:"C" },
          { id:"h19nb11", num:11, text:"Sản phẩm chính thu được khi cho 3-chlorobut-1-ene tác dụng với HBr có tên thay thế là:", options:["A. 1-bromo-3-chlorobutane.","B. 2-bromo-3-chlorobutane.","C. 2-bromo-2-chlorobutane.","D. 2-chloro-3-bromobutane."], answer:"B" },
          { id:"h19nb12", num:12, text:"Cho lần lượt các chất C2H5Cl, C2H5OH, C6H5OH vào dung dịch NaOH đun nóng. Hỏi có bao nhiêu chất tham gia phản ứng?", options:["A. Không chất nào.","B. Một.","C. Hai.","D. Cả ba chất."], answer:"C" },
          { id:"h19nb13", num:13, text:"Nhỏ dung dịch AgNO3 vào ống nghiệm chứa một ít dẫn xuất halogen CH2=CHCH2Cl, lắc nhẹ. Hiện tượng xảy ra là", options:["A. Thoát ra khí màu vàng lục.","B. xuất hiện kết tủa trắng.","C. không có hiện tượng.","D. xuất hiện kết tủa vàng."], answer:"B" },
          { id:"h19nb14", num:14, text:"Cho hợp chất thơm: ClC6H4CH2Cl + dung dịch KOH (loãng, dư, to) ta thu được chất nào?", options:["A. HOC6H4CH2OH.","B. ClC6H4CH2OH.","C. HOC6H4CH2Cl.","D. KOC6H4CH2OH."], answer:"B" },
          { id:"h19nb15", num:15, text:"Khi đun nóng dẫn xuất halogen X với dung dịch NaOH tạo thành hợp chất aldehyde acetic. Tên của hợp chất X là", options:["A. 1,2-dibromomethane.","B. 1,1-dibromoethane.","C. ethyl chloride.","D. A và B đúng."], answer:"B" },
          { id:"h19nb16", num:16, text:"PVC được trùng hợp từ chất nào sau đây?", options:["A. CH3CH2Cl.","B. CH2=CH-Cl.","C. CH2=CH2.","D. CH2=CH-CN."], answer:"B" },
          { id:"h19nb17", num:17, text:"Tên gọi thông thường của dẫn xuất halogen có công thức CHCl3 là", options:["A. methyl chloride.","B. trichloromethane.","C. chloroform.","D. propyl chloride."], answer:"C" },
          { id:"h19nb18", num:18, text:"Chất nào sau đây là dẫn xuất halogen của hydrocarbon?", options:["A. Cl–CH2–COOH.","B. C6H5–NH3Cl.","C. CH3–CH2–Br.","D. CH3–CO–Cl."], answer:"C" },
          { id:"h19nb19", num:19, text:"Cho butane phản ứng với chlorine thu được sản phẩm chính (monochloro) là", options:["A. 2,3-dichlorobutane.","B. 3-chlorobutane.","C. 2-chlorobutane.","D. 1-chlorobutane."], answer:"C" },
          { id:"h19nb20", num:20, text:"Công thức phân tử của chloromethane là", options:["A. CH2Cl2.","B. CH3Cl.","C. CHCl3.","D. CCl4."], answer:"B" }
        ]
      },
      {
        id: "hoa_b19_hieu",
        title: "Hiểu (20 câu)",
        type: "mcq",
        questions: [
          { id:"h19h1", num:1, text:"Cho các dẫn xuất halogen: C2H5F (1); C2H5Br (2); C2H5I (3); C2H5Cl (4). Thứ tự giảm dần nhiệt độ sôi là", options:["A. (3)>(2)>(4)>(1).","B. (1)>(4)>(2)>(3).","C. (1)>(2)>(3)>(4).","D. (3)>(2)>(1)>(4)."], answer:"A" },
          { id:"h19h2", num:2, text:"Sự tách HX của dẫn xuất halogen X có CTPT C4H9Cl cho 3 alkene đồng phân, X là chất nào?", options:["A. n-butyl chloride.","B. sec-butyl chloride.","C. iso-butyl chloride.","D. tert-butyl chloride."], answer:"B" },
          { id:"h19h3", num:3, text:"Đun sôi dẫn xuất halogen X với nước một thời gian, sau đó thêm dung dịch AgNO3 vào thấy xuất hiện kết tủa. X là", options:["A. CH2=CHCH2Cl.","B. CH3CH2CH2Cl.","C. C6H5CH2Br.","D. A hoặc C."], answer:"D" },
          { id:"h19h4", num:4, text:"Một hợp chất hữu cơ Z có % khối lượng của C, H, Cl lần lượt là: 14,28%; 1,19%; 84,53%. CTPT của Z là", options:["A. CHCl2.","B. C2H2Cl4.","C. C2H4Cl2.","D. một kết quả khác."], answer:"B" },
          { id:"h19h5", num:5, text:"Cho sơ đồ phản ứng: CH4 → X → Y → Z → T → C6H5OH. Z là", options:["A. C6H5Cl.","B. C6H5NH2.","C. C6H5NO2.","D. C6H5ONa."], answer:"A" },
          { id:"h19h6", num:6, text:"Chất X có công thức cấu tạo: CH3CHBrCH2CH3. Phát biểu nào sau đây sai?", options:["A. X có tên thay thế là 2-bromobutane.","B. X thuộc dẫn xuất halogen bậc II.","C. Khi đun sôi X với KOH trong ethanol thu được sản phẩm chính (theo quy tắc Zaitsev) có tên thay thế là but-1-ene.","D. X có nhiệt độ sôi cao hơn CH3Br."], answer:"C" },
          { id:"h19h7", num:7, text:"Cho 5 chất: CH3CH2CH2Cl (1); CH2=CHCH2Cl (2); C6H5Cl (3); CH2=CHCl (4); C6H5CH2Cl (5). Đun từng chất với dung dịch NaOH loãng, dư, sau đó gạn lấy lớp nước và axit hoá bằng dung dịch HNO3, sau đó nhỏ vào đó dung dịch AgNO3 thì các chất có xuất hiện kết tủa trắng là", options:["A. (1), (3), (5).","B. (2), (3), (5).","C. (1), (2), (3), (5).","D. (1), (2), (5)."], answer:"D" },
          { id:"h19h8", num:8, text:"Công thức đơn giản của 'phẩm đỏ' có thành phần: 45,70%C; 1,90%H; 7,60%O; 6,70%N; 38,10%Br là", options:["A. C4H8O2NBr2.","B. C2H4ONBr.","C. C8H4ONBr.","D. C4H2ONBr."], answer:"D" },
          { id:"h19h9", num:9, text:"Đun sôi dẫn xuất halogen X với dung dịch NaOH loãng, đun nóng một thời gian, sau đó thêm dung dịch AgNO3 vào thấy xuất hiện kết tủa. X không thể là", options:["A. CH2=CHCH2Cl.","B. CH3CH2CH2Cl.","C. C6H5CH2Cl.","D. C6H5Cl."], answer:"D" },
          { id:"h19h10", num:10, text:"Nguyên nhân dẫn đến sự tăng dần nhiệt độ sôi từ CH3F đến CH3I là do", options:["A. Độ dài liên kết carbon-halogen tăng dần từ CH3F đến CH3I.","B. Độ âm điện của các halogen trong dẫn xuất giảm dần từ F đến I.","C. Sự phân cực của liên kết carbon-halogen giảm dần từ CH3F đến CH3I.","D. Tương tác Van der Waals tăng dần từ CH3F đến CH3I."], answer:"D" },
          { id:"h19h11", num:11, text:"Sản phẩm chính của phản ứng nào sau đây không đúng?", options:["A. CH3CH(Cl)CH3 + NaOH → CH3CH(OH)CH3 + NaCl.","B. CH3CH2Cl + KOH → CH2=CH2 + KCl + H2O.","C. CH3Br + KOH → CH3OH + KBr.","D. CH3CH2CH(Br)CH3 + KOH → CH3CH=CHCH3 + KBr + H2O."], answer:"B" },
          { id:"h19h12", num:12, text:"Hợp chất hữu cơ X có: %C=35,04%; %H=6,57%; %Br=58,39%; M=137. Công thức phân tử của X là", options:["A. C4H9Br.","B. C3H7Br.","C. C4H8Br2.","D. C3H6Br2."], answer:"A" },
          { id:"h19h13", num:13, text:"Cho hợp chất thơm: ClC6H4CH2Cl + dung dịch KOH (đặc, dư, to, p) ta thu được chất nào?", options:["A. KOC6H4CH2OK.","B. HOC6H4CH2OH.","C. ClC6H4CH2OH.","D. KOC6H4CH2OH."], answer:"A" },
          { id:"h19h14", num:14, text:"Cho hợp chất thơm: ClC6H4CH2Cl + dung dịch KOH (loãng, dư, to) ta thu được chất nào?", options:["A. KOC6H4CH2OK.","B. HOC6H4CH2OH.","C. ClC6H4CH2OH.","D. KOC6H4CH2OH."], answer:"C" },
          { id:"h19h15", num:15, text:"Sản phẩm chính theo quy tắc Zaitsev của phản ứng tách HBr từ 2-bromobutane với KOH/ethanol là", options:["A. but-2-yne.","B. but-1-ene.","C. but-2-ene.","D. but-1-yne."], answer:"C" },
          { id:"h19h16", num:16, text:"Ứng dụng nào sau đây không phải của dẫn xuất halogen?", options:["A. Tác nhân làm lạnh.","B. Sản xuất dược phẩm.","C. Sản xuất thuốc kích thích hoa quả chín.","D. Sản xuất thuốc bảo vệ thực vật."], answer:"C" },
          { id:"h19h17", num:17, text:"Liên kết C-X trong phân tử dẫn xuất halogen", options:["A. Phân cực về phía nguyên tử halogen.","B. Phân cực về phía nguyên tử carbon.","C. Phân cực về phía nguyên tử hydrogen.","D. Không phân cực."], answer:"A" },
          { id:"h19h18", num:18, text:"Lượng chlorobenzene thu được khi cho 23,4 gam C6H6 tác dụng hết với Cl2 (xúc tác bột Fe) với hiệu suất phản ứng đạt 100% là bao nhiêu?", options:["A. 34,05 gam.","B. 30,25 gam.","C. 27 gam.","D. 33,75 gam."], answer:"D" },
          { id:"h19h19", num:19, text:"Cho sơ đồ: C2H5Br → A → B → C. Chất C có công thức là", options:["A. CH3COOH.","B. CH3CH2COOH.","C. CH3CH2OH.","D. CH3CH2CH2COOH."], answer:"B" },
          { id:"h19h20", num:20, text:"Một hợp chất hữu cơ X có %C=14,28%; %H=1,19%; %Cl=84,53%. Công thức phân tử của X và số công thức cấu tạo phù hợp là", options:["A. CHCl2 và 1.","B. C2H2Cl4 và 3.","C. C2H4Cl2 và 2.","D. C2H2Cl4 và 2."], answer:"D" }
        ]
      }
    ]
  },
  {
    id: "hoa_b20",
    title: "Hóa 11 – Bài 20: Alcohol",
    subject: "hoa",
    sections: [
      {
        id: "hoa_b20_tf_nb",
        title: "Đúng/Sai – Nhận Biết (5 câu)",
        type: "truefalse",
        questions: [
          { id:"h20tfnb1", num:1, stem:"Cho các phát biểu về định nghĩa và phân loại alcohol:", items:{a:"Alcohol là hợp chất hữu cơ có nhóm –OH liên kết với nguyên tử carbon no.",b:"Phenol (C6H5OH) là alcohol vì có nhóm –OH.",c:"Glycerol là alcohol đa chức.",d:"Ethanol là alcohol đơn chức."}, answers:{a:"D",b:"S",c:"S",d:"D"} },
          { id:"h20tfnb2", num:2, stem:"Cho các phát biểu về công thức và danh pháp alcohol:", items:{a:"Công thức chung của alcohol no, đơn chức, mạch hở là CnH2n+1OH (n≥1).",b:"Tên thay thế của CH3OH là methanol.",c:"Tên thay thế của C2H5OH là ethanol.",d:"Tên thay thế của (CH3)2CHOH là propan-1-ol."}, answers:{a:"D",b:"S",c:"D",d:"D"} },
          { id:"h20tfnb3", num:3, stem:"Cho các phát biểu về tính chất vật lí của alcohol:", items:{a:"Alcohol có nhiệt độ sôi cao hơn hydrocarbon có phân tử khối tương đương.",b:"Alcohol tan tốt trong nước do tạo liên kết hydrogen với nước.",c:"Methanol, ethanol, propanol đều tan vô hạn trong nước.",d:"Alcohol có nhiệt độ sôi thấp hơn ether đồng phân."}, answers:{a:"D",b:"D",c:"D",d:"S"} },
          { id:"h20tfnb4", num:4, stem:"Cho các phát biểu về phản ứng của alcohol với kim loại kiềm:", items:{a:"Ethanol tác dụng với Na giải phóng khí H2.",b:"Glycerol tác dụng với Na giải phóng khí H2.",c:"Alcohol không tác dụng với Na.",d:"Phản ứng của alcohol với Na tương tự phản ứng của nước với Na."}, answers:{a:"D",b:"D",c:"S",d:"D"} },
          { id:"h20tfnb5", num:5, stem:"Cho các phát biểu về nhận biết alcohol:", items:{a:"Glycerol hòa tan Cu(OH)2 tạo dung dịch màu xanh lam đặc trưng.",b:"Ethanol hòa tan Cu(OH)2 tạo dung dịch màu xanh lam.",c:"Alcohol đơn chức không hòa tan Cu(OH)2.",d:"Chỉ có alcohol đa chức mới hòa tan được Cu(OH)2."}, answers:{a:"D",b:"S",c:"S",d:"S"} }
        ]
      },
      {
        id: "hoa_b20_tf_hieu",
        title: "Đúng/Sai – Hiểu (5 câu)",
        type: "truefalse",
        questions: [
          { id:"h20tfh1", num:1, stem:"Cho các phát biểu về phản ứng tách nước của alcohol:", items:{a:"Đun nóng ethanol với H2SO4 đặc ở 170°C tạo ethylene.",b:"Đun nóng ethanol với H2SO4 đặc ở 140°C tạo diethyl ether.",c:"Sản phẩm chính khi tách nước 2-methylbutan-2-ol là 2-methylbut-1-ene.",d:"Phản ứng tách nước alcohol tuân theo quy tắc Zaitsev."}, answers:{a:"S",b:"S",c:"D",d:"D"} },
          { id:"h20tfh2", num:2, stem:"Cho các phát biểu về phản ứng oxi hóa alcohol:", items:{a:"Alcohol bậc I bị oxi hóa bởi CuO tạo aldehyde.",b:"Alcohol bậc II bị oxi hóa bởi CuO tạo ketone.",c:"Alcohol bậc III bị oxi hóa bởi CuO tạo acid.",d:"Ethanol bị oxi hóa hoàn toàn bởi O2 tạo CO2 và H2O."}, answers:{a:"S",b:"D",c:"S",d:"D"} },
          { id:"h20tfh3", num:3, stem:"Cho các phát biểu về ứng dụng của alcohol:", items:{a:"Ethanol được dùng làm nhiên liệu sinh học.",b:"Glycerol được dùng trong công nghiệp mỹ phẩm.",c:"Methanol là chất độc, không được dùng làm đồ uống.",d:"Ethanol được dùng làm dung môi trong y tế."}, answers:{a:"S",b:"D",c:"D",d:"D"} },
          { id:"h20tfh4", num:4, stem:"Cho các phát biểu về phản ứng của alcohol với acid:", items:{a:"Ethanol tác dụng với CH3COOH tạo ester.",b:"Alcohol tác dụng với HBr tạo dẫn xuất halogen.",c:"Glycerol tác dụng với HNO3 đặc tạo nitroglycerin.",d:"Alcohol không tác dụng với acid vô cơ."}, answers:{a:"D",b:"S",c:"D",d:"S"} },
          { id:"h20tfh5", num:5, stem:"Cho các phát biểu về điều chế alcohol:", items:{a:"Ethanol được điều chế bằng cách hydrat hóa ethylene.",b:"Ethanol được điều chế bằng cách lên men tinh bột.",c:"Methanol được điều chế từ khí tổng hợp (CO + H2).",d:"Glycerol là sản phẩm phụ của quá trình sản xuất xà phòng."}, answers:{a:"D",b:"D",c:"D",d:"S"} }
        ]
      },
      {
        id: "hoa_b20_nb",
        title: "Nhận Biết (20 câu)",
        type: "mcq",
        questions: [
          { id:"h20nb1", num:1, text:"Alcohol là những hợp chất hữu cơ mà phân tử có chứa nhóm OH liên kết trực tiếp với", options:["A. nguyên tử carbon.","B. nguyên tử carbon không no.","C. nguyên tử carbon no.","D. nguyên tử oxygen."], answer:"C" },
          { id:"h20nb2", num:2, text:"Công thức tổng quát của alcohol no, đơn chức, mạch hở là", options:["A. CnH2n-1OH (n≥3).","B. CnH2n+2OH (n≥1).","C. CnH2n+1O (n≥1).","D. CnH2n+1OH (n≥1)."], answer:"D" },
          { id:"h20nb3", num:3, text:"Chất nào sau đây là alcohol đa chức?", options:["A. ethanol.","B. methanol.","C. glycerol.","D. butan-2-ol."], answer:"C" },
          { id:"h20nb4", num:4, text:"Chất nào sau đây thuộc loại alcohol no, đơn chức, mạch hở?", options:["A. HCHO.","B. C2H4(OH)2.","C. CH2=CHCH2OH.","D. C2H5OH."], answer:"D" },
          { id:"h20nb5", num:5, text:"Hợp chất nào sau đây là alcohol bậc một, no, đơn chức, mạch hở?", options:["A. CH2=CH-CH2OH.","B. (CH3)2CH-CH2OH.","C. C6H5CH2OH.","D. (CH3)2CHOH."], answer:"B" },
          { id:"h20nb6", num:6, text:"Hợp chất nào sau đây là alcohol bậc hai, no, đơn chức, mạch hở?", options:["A. CH3-CHOH-CH3.","B. CH2=CH-CH2OH.","C. HOCH2-CH2OH.","D. C6H5-CH2OH."], answer:"A" },
          { id:"h20nb7", num:7, text:"Chất nào sau đây là alcohol bậc 3?", options:["A. HOCH2CH2OH.","B. (CH3)2CHOH.","C. (CH3)2CHCH2OH.","D. (CH3)3COH."], answer:"D" },
          { id:"h20nb8", num:8, text:"CH3-CH(CH3)-CH2-OH có tên là", options:["A. 2-methylbutan-1-ol.","B. 2-methylpropan-3-ol.","C. methylpropanol.","D. 2-methylpropan-1-ol."], answer:"D" },
          { id:"h20nb9", num:9, text:"Alcohol nào sau đây phản ứng được với copper(II) hydroxide tạo dung dịch màu xanh lam đậm?", options:["A. Methanol.","B. Glycerol.","C. Ethanol.","D. Propan-2-ol."], answer:"B" },
          { id:"h20nb10", num:10, text:"Công thức phân tử ethanol là", options:["A. C2H4O2.","B. C2H4O.","C. C2H6.","D. C2H6O."], answer:"D" },
          { id:"h20nb11", num:11, text:"Tên thay thế của alcohol có công thức cấu tạo CH3CH2CH2OH là", options:["A. propan-1-ol.","B. propan-2-ol.","C. pentan-1-ol.","D. pentan-2-ol."], answer:"A" },
          { id:"h20nb12", num:12, text:"Đun nóng C2H5OH với H2SO4 đặc ở 140°C, thu được sản phẩm là", options:["A. CH2=CH2.","B. CH3-O-CH3.","C. C2H5-O-C2H5.","D. CH3-CH=O."], answer:"C" },
          { id:"h20nb13", num:13, text:"Alcohol nào sau đây bị oxi hóa bởi CuO/to tạo ra aldehyde?", options:["A. CH3-CHOH-CH3.","B. (CH3)3C-OH.","C. CH3CH2-CHOH-CH3.","D. (CH3)2CH-CH2OH."], answer:"D" },
          { id:"h20nb14", num:14, text:"Cho phản ứng: (CH3)2CH-CH2OH + CuO →. Sản phẩm của phản ứng có công thức cấu tạo là", options:["A. (CH3)2C=O.","B. (CH3)2CH-COOH.","C. (CH3)2CH-CHO.","D. (CH3)2C=CH2."], answer:"C" },
          { id:"h20nb15", num:15, text:"Một loại xăng sinh học E5 có chứa", options:["A. 5% xăng RON 92.","B. 5% ethanol.","C. 50% xăng RON 92.","D. 50% ethanol."], answer:"B" },
          { id:"h20nb16", num:16, text:"Trong công nghiệp ethanol được điều chế từ X bằng phản ứng hợp nước với xúc tác acid. X là", options:["A. CH4.","B. C2H6.","C. C2H2.","D. C2H4."], answer:"D" },
          { id:"h20nb17", num:17, text:"So với các hydrocarbon và dẫn xuất halogen có phân tử khối tương đương, alcohol có nhiệt độ sôi", options:["A. cao hơn.","B. thấp hơn.","C. bằng nhau.","D. thấp hơn rất nhiều."], answer:"A" },
          { id:"h20nb18", num:18, text:"Công thức phân tử ethanol là", options:["A. C2H4O2.","B. C2H4O.","C. C2H6.","D. C2H6O."], answer:"D" },
          { id:"h20nb19", num:19, text:"Công thức phân tử methanol là", options:["A. C2H4O.","B. CH2O.","C. CH4.","D. CH4O."], answer:"D" },
          { id:"h20nb20", num:20, text:"Phương pháp sinh hóa sử dụng enzyme để lên men tinh bột điều chế alcohol nào sau đây?", options:["A. methanol.","B. ethanol.","C. glycerol.","D. propan-1-ol."], answer:"B" }
        ]
      },
      {
        id: "hoa_b20_hieu",
        title: "Hiểu (20 câu)",
        type: "mcq",
        questions: [
          { id:"h20h1", num:1, text:"Khi đun nóng hỗn hợp alcohol gồm CH3OH và C2H5OH (xúc tác H2SO4 đặc, ở 140°C) thì số ether thu được tối đa là", options:["A. 4.","B. 2.","C. 1.","D. 3."], answer:"D" },
          { id:"h20h2", num:2, text:"Alcohol nào sau đây khi tách nước tạo thành hai alkene?", options:["A. CH3CH2OH.","B. CH3-CHOH-CH3.","C. CH3-CHOH-CH2CH3.","D. CH3OH."], answer:"C" },
          { id:"h20h3", num:3, text:"Alcohol nào sau đây khi tách nước chỉ tạo ra một alkene?", options:["A. CH3-CH(OH)-CH2CH3.","B. CH3-CH(OH)-CH(CH3)2.","C. CH3-CH(OH)-CH3.","D. CH3CH2-CH(OH)-CH(CH3)2."], answer:"C" },
          { id:"h20h4", num:4, text:"Sản phẩm chính thu được khi đun nóng alcohol 3-methylbutan-2-ol với H2SO4 đặc ở 180°C có tên gọi là", options:["A. 3-methylbut-1-ene.","B. 2-methylbut-2-ene.","C. 3-methylbut-2-ene.","D. 2-methylbut-1-ene."], answer:"B" },
          { id:"h20h5", num:5, text:"Hydrat hóa 2-methylbut-2-ene thì thu được sản phẩm chính là", options:["A. 3-methylbutan-1-ol.","B. 3-methylbutan-2-ol.","C. 2-methylbutan-2-ol.","D. 2-methylbutan-1-ol."], answer:"C" },
          { id:"h20h6", num:6, text:"Để phân biệt alcohol đơn chức với alcohol đa chức có ít nhất 2 nhóm -OH liền kề nhau người ta dùng thuốc thử là", options:["A. nước bromine.","B. dung dịch thuốc tím.","C. dung dịch AgNO3.","D. Cu(OH)2."], answer:"D" },
          { id:"h20h7", num:7, text:"Ethanol không tác dụng với chất nào sau đây?", options:["A. Na.","B. KOH.","C. CuO.","D. O2."], answer:"B" },
          { id:"h20h8", num:8, text:"Hydrat hóa hai alkene chỉ tạo thành hai alcohol. Hai alkene đó là", options:["A. 2-methylpropene và but-1-ene.","B. propene và but-2-ene.","C. ethene và but-2-ene.","D. ethene và but-1-ene."], answer:"C" },
          { id:"h20h9", num:9, text:"Cho 4 alcohol: C2H5OH (1); C2H4(OH)2 (2); C3H5(OH)3 (3) và HOCH2CH2CH2OH (4). Alcohol không hòa tan được Cu(OH)2 là", options:["A. 1, 2.","B. 2, 4.","C. 1, 4.","D. chỉ có 1."], answer:"C" },
          { id:"h20h10", num:10, text:"Cho alcohol ethylic tác dụng lần lượt với: Na, NaOH, KOH, CH3OH, O2, CuO, Cu(OH)2. Số chất tham gia phản ứng là", options:["A. 6.","B. 3.","C. 4.","D. 5."], answer:"C" },
          { id:"h20h11", num:11, text:"Các alcohol có nhiệt độ sôi, nhiệt độ nóng chảy, độ tan trong H2O cao hơn so với hydrocarbon vì:", options:["A. Các alcohol có nguyên tử O trong phân tử.","B. Các alcohol có khối lượng phân tử lớn.","C. Các alcohol có khối lượng phân tử lớn hơn hydrocarbon và có khả năng hình thành liên kết hydrogen với H2O.","D. Giữa các phân tử alcohol tồn tại liên kết hydrogen liên phân tử đồng thời có sự tương đồng với cấu tạo của H2O."], answer:"D" },
          { id:"h20h12", num:12, text:"Trong các chất sau đây, chất nào có nhiệt độ sôi thấp nhất?", options:["A. CH3OH.","B. CH3CH(OH)CH3.","C. CH3CH2CH2OH.","D. C2H5OH."], answer:"A" },
          { id:"h20h13", num:13, text:"Mentol trong tinh dầu bạc hà thuộc loại alcohol", options:["A. bậc 2.","B. bậc 1.","C. bậc 3.","D. bậc 4."], answer:"A" },
          { id:"h20h14", num:14, text:"Chất nào sau đây không tác dụng được với CH3OH?", options:["A. Na.","B. NaOH.","C. C2H5OH.","D. CuO."], answer:"B" },
          { id:"h20h15", num:15, text:"X là một alcohol có công thức phân tử C3H8On, X có khả năng hòa tan Cu(OH)2 ở nhiệt độ thường. Số đồng phân của X là", options:["A. 3.","B. 4.","C. 2.","D. 1."], answer:"C" },
          { id:"h20h16", num:16, text:"Tách nước alcohol X, thu được sản phẩm duy nhất là 3-methylpent-1-ene. Tên gọi của X là", options:["A. 4-methylpentan-1-ol.","B. 3-methylpentan-1-ol.","C. 3-methylpentan-2-ol.","D. 3-methylpentan-3-ol."], answer:"B" },
          { id:"h20h17", num:17, text:"Cho các chất sau: ethyl alcohol, ethylene glycol, glycerol, propyl alcohol. Số chất tác dụng với Cu(OH)2 là", options:["A. 1.","B. 2.","C. 3.","D. 4."], answer:"B" },
          { id:"h20h18", num:18, text:"Chọn phát biểu không đúng?", options:["A. Alcohol là hợp chất hữu cơ có nhóm hydroxyl (-OH) liên kết với nguyên tử carbon no.","B. Alcohol có từ 2 nhóm hydroxyl (-OH) trở lên gọi là polyalcohol.","C. Giữa các phân tử alcohol có liên kết hydrogen liên phân tử nên có nhiệt độ sôi cao hơn ether đồng phân.","D. Tất cả các polyalcohol đều hòa tan được Cu(OH)2 tạo dung dịch màu xanh đặc trưng."], answer:"D" },
          { id:"h20h19", num:19, text:"Alcohol nào sau đây khi tách nước tạo ra một alkene duy nhất?", options:["A. CH3-CH2-CH(OH)-CH3.","B. CH3-CH(OH)-CH3.","C. CH3-CH2-CH2-CH(OH)-CH3.","D. CH3-CH2-C(CH3)2OH."], answer:"B" },
          { id:"h20h20", num:20, text:"Cho x mol alcohol A tác dụng với Na dư thì thu được x mol H2. X có thể là chất nào sau đây?", options:["A. Ethyl alcohol.","B. Glycerol.","C. Benzyl alcohol.","D. Ethylene glycol."], answer:"D" }
        ]
      }
    ]
  }
];
