// ============ DATA (Copy CSV from previous full file) ============
const wordCSV = `简体字,Jiǎntǐzì ,จีนตัวย่อ,Simplified Chinese
繁体字,fántǐzì ,จีนตัวเต็ม,Traditional Chinese
拼音,pīnyīn,พินอิน,Pinyin
因为,yīnwèi,เพราะ,because
西班牙语,xībānyáyǔ,สเปน,spanish
星期一,xīngqīyī,วันจันทร์,Monday
下午,xiàwǔ,ตอนบ่าย,afternoon
上午,shàngwǔ,เช้า,morning
晚上,wǎnshàng,กลางคืน,night
怎么样,zěnmeyàng,เป็นยังไงบ้าง,How about it
熊猫,xióngmāo,หมีแพนด้า,panda
北京烤鸭,běijīngkǎoyā,เป็ดปักกิ่ง,Peking duck
最,zuì,ที่สุด,most
香蕉,xiāngjiāo,กล้วย,banana
有点,yǒudiǎn,นิดหน่อย,A bit
累,Lèi,เหนื่อย,tired
贵,guì,แพง,expensive
读,dú,อ่าน,read
忙,máng,ยุ่ง,busy
最近,zuìjìn,ล่าสุด,recent
游泳,yóuyǒng,ว่ายน้ำ,swim
可爱,kěài,น่ารัก,cute
每星期,měixīngqī,ทุกสัปดาห์,every week
游泳馆,yóuyǒngguǎn,สระว่ายน้ำ,swimming pool
有时候,yǒushíhou,บางครั้ง,sometimes
天,tiān,ท้องฟ้า,sky
空调,kōngtiáo,เครื่องปรับอากาศ,air conditioner
欧洲,ōuzhōu,ยุโรป,Europe
更,gēng,สม่ำเสมอ,Even
什么时候,shénme shíhou,เมื่อไร,when
难,nán,ยาก,Disaster
早饭,zǎofàn,อาหารเช้า,breakfast
网上,wǎngshàng,ออนไลน์,online
不错,bùcuò,ไม่แย่,Not bad
打算,dǎsuàn,ตั้งใจ,Intend
甜点,tiándiǎn,ขนม,dessert
可能,kěnéng,เป็นไปได้,Maybe / Possible
非常,fēicháng,มาก,Very
真的,zhēnde,จริง,real
听说,tīngshuō,ได้ยิน,heard
附近,fùjìn,ใกล้เคียง,nearby
市内,shìnèi,ในเมือง,In the city
多远,duōyuǎn,ไกลแค่ไหน,How far
下次,xiàcì,คราวหน้า,next time
树,shù,ต้นไม้,Tree
猫粮,māo liáng,อาหารแมว,cat food
院子,yuànzi,ลานบ้าน,courtyard
流浪猫,liúlàng māo,แมวจรจัด,stray cat
流浪汉,liúlànghàn,คนจรจัด,tramp
收养,shōuyǎng,การรับเลี้ยงบุตรบุญธรรม,adoption
曼谷,màngǔ,กรุงเทพฯ,Bangkok
认识,rènshi,ทราบ,know
结婚,jiéhūn,แต่งงาน,marry
单身,dānshēn,เดี่ยว,single
一个人住,yīgè rénzhù,อยู่คนเดียว,live alone
公交车,gōngjiāochē,รสบัส,the bus
自行车,zìxíngchē,จักรยาน,bike
走路,zǒulù,เดิน,walk
开车,kāichē,ขับ,drive
房子,fángzi,บ้าน,house
快,kuài,เร็ว,quick
试,shì,พยายาม,try
鞋子,xiézi,รองเท้า,shoe
电脑,diànnǎo,คอมพิวเตอร์,computer
以后,yǐhòu,ภายหลัง,after
第一次,dìyīcì,อันดับแรก,first
骑自行车,qí zìxíngchē,การปั่นจักรยาน,Cycling
简单,jiǎndān,เรียบง่าย,Simple
德国,déguó,เยอรมนี,Germany
小孩子,xiǎoháizi,เด็ก,child
俄罗斯,éluósī,รัสเซีย,Russia
南方,nánfāng,ใต้,south
香港,xiānggǎng,ฮ่องกง,Hongkong
生日快乐,shēngrìkuàilè,สุขสันต์วันเกิด,Happy birthday
问题,wèntí,ปัญหา,question
手机,shǒujī,สมาร์ทโฟน,cell phone
三星,sānxīng,ซัมซุง,Samsung
前天,qiántiān,วันก่อนเมื่อวาน,the day before yesterday
用,yòng,ใช้,use
电影,diànyǐng,ภาพยนตร์,Movie
差不多,chàbuduō,เกือบ,almost
地铁,dìtiě,เอ็มอาร์ที,subway
汉语字,hànyǔ zì,ตัวอักษรจีน,Chinese characters
还行,huán xíng,ตกลง,good
老家,lǎojiā,บ้านเกิด,hometown
外国人,wàiguórén,ชาวต่างชาติ,foreigner
大象,dàxiàng,ช้าง,elephant
小时候,xiǎoshíhou,วัยเด็ก,childhood
骑马,qímǎ,การขี่ม้า,horse riding
蚊子,wénzi,ยุง,mosquito
堵车,dǔchē,การจราจรติดขัด,traffic jam
容易,róngyì,ง่าย,easy
压力大,yālì dà,เครียด,Stressful
爬山,páshān,ปีนภูเขา,climb mountains
失眠,shīmián,นอนไม่หลับ,Insomnia
刚才,gāngcái,แค่ตอนนี้,Just now
方便面,fāngbiànmiàn,บะหมี่กึ่งสำเร็จรูป,instant noodles
泡茶,pàochá,ชงชา,Make tea
词,cí,อักขระ,word
比如,bǐrú,ตัวอย่างเช่น,for example
晴天,qíngtiān,แดดจัด,sunny
伤心,shāngxīn,เศร้า,sad
开心,kāixīn,มีความสุข,happy
睡觉,shuìjiào,นอน,sleep
穿衣服,chuānyīfú,แต่งตัว,get dressed
如果,rúguǒ,ถ้า,if
面包,miànbāo,ขนมปัง,bread
几乎每天,jīhū měitiān,เกือบทุกวัน,almost every day
等下,děng xià,รอ,Wait
很多次,hěn duōcì,หลายครั้ง,many times
下次见,xiàcì jiàn,เจอกันครั้งหน้าครับ,See you next time
试穿,shìchuān,ลองเสื้อผ้า,try on clothes
下星期,xiàxīngqī,สัปดาห์หน้า,next week
老婆,lǎopó,ภรรยา,Wife
练力气,liàn lìqì,ฝึกความแข็งแกร่ง,practice strength
猜,cāi,เดา,Guess
讲价,jiǎngjià,การต่อรองราคา,Bargaining
地铁站,dìtiězhàn,สถานีเอ็มอาร์ที,metro station
对我来说,duì wǒ láishuō,สำหรับฉัน,for me
好久不见,hǎojiǔbujiàn,ไม่เจอกันนานเลย,haven't seen you for a long time
一两句,yīliǎngjù,หนึ่งหรือสองประโยค,a sentence or two
又困又累,yòu kùn yòu lěi,ง่วงนอนและเหนื่อย,sleepy and tired
聪明,cōngming,ปราดเปรื่อง,clever
矮,ǎi,สั้น,short
胖,pàng,อ้วน,fat
半夜,bànyè,เที่ยงคืน,midnight
啤酒节,píjiǔjié,เทศกาลอ็อกโทเบอร์เฟสต์,Oktoberfest
汽车,qìchē,รถ,car
菲律宾,fēilǜbīn,ฟิลิปปินส์,the Philippines
外国,wàiguó,ต่างชาติ,foreign
风景,fēngjǐng,ภูมิประเทศ,landscape
学校,xuéxiào,โรงเรียน,School
新加坡,xīnjiāpō,สิงคโปร์,Singapore
马马虎虎,mǎmahūhū,พอดูได้,so-so
越南,yuènán,เวียดนาม,Vietnam
最好玩,zuì hàowán,สนุกที่สุด,The most fun
运动,yùndòng,กีฬา,sports
草莓,cǎoméi,สตรอเบอร์รี่,strawberry
水果,shuǐguǒ,ผลไม้,fruit
榴莲,liúlián,ทุเรียน,durian
炒米粉,chǎo mǐfěn,เส้นหมี่ผัด,Fried rice noodles
不确定,bù quèdìng,ไม่แน่ใจ,uncertain
百分之百。,bǎifēnzhībǎi 。,ร้อยเปอร์เซ็นต์,hundred percent.
蛋炒饭。,dànchǎofàn 。,ข้าวผัดไข่.,Egg fried rice.
咖喱,gālí,แกง,curry
大部分人,dàbùfen rén,คนส่วนใหญ่,most people
肠粉,chángfěn,ม้วนข้าว,Steamed Vermicelli Roll
或者,huòzhě,หรือ,or
粥,zhōu,ข้าวต้ม,Porridge
面条,miàntiáo,ก๋วยเตี๋ยว,Noodle
海鲜,hǎixiān,อาหารทะเล,seafood
虾,xiā,กุ้ง,shrimp
螃蟹,pángxiè,ปู,Crab
海边,hǎibiān,ริมทะเล,seaside
猪肉,zhūròu,เนื้อหมู,pork
羊肉,yángròu,เนื้อแกะ,mutton
便宜,piányi,ราคาถูก,Cheap
鸭肉,yāròu,เนื้อเป็ด,duck
退休,tuìxiū,เกษียณอายุ,retire
暖气,nuǎnqì,เครื่องทำความร้อน,Heating
吹,chuī,เป่า,blow
省,shěng,จังหวัด/เพื่อประหยัด....,Province/to save ....
省钱,shěngqián,ประหยัดเงิน,save money
进口,jìnkǒu,นำเข้า,import
美式咖啡,měishì kāfēi,อเมริกาโน่,Americano
同一,tóngyī,เดียวกัน,same
广州,guǎngzhōu,กว่างโจว,Guangzhou
选择,xuǎnzé,เลือก,choose
评价,píngjià,การประเมิน,evaluate
进步,jìnbù,ความคืบหน้า,progress
年龄,niánlíng,อายุ,age
教,jiào,สอน,teach
国家,guójiā,ชาติ,nation
口语,kǒuyǔ,การพูด,spoken language
另一个,lìng yīgè,อื่น,another
洗衣服。,xǐyīfú 。,ซักผ้า,do the laundry.
大概,dàgài,บางที,perhaps
动物园,dòngwùyuán,สวนสัตว์,zoo
是因为,shìyīnwéi,มันเป็นเพราะว่า,It's because
高铁,gāotiě,รถไฟความเร็วสูง,high speed rail
一个小时,yīgè xiǎoshí,หนึ่งชั่วโมง,an hour
公里,gōnglǐ,กิโลเมตร,kilometer
视频,shìpín,ฟิล์ม,video
一套,yītào,ชุด,set
比较,bǐjiào,เปรียบเทียบ,Compare
要花,yàohuā,เพื่อใช้จ่าย,To spend
阿姨,āyí,ป้า,Aunt
借,jiè,ยืม,borrow
踢足球,tīzúqiú,เล่นฟุตบอล,play soccer
段时间,duànshíjiān,ระยะเวลา,period of time
拍教,pāijiào,กวดวิชาการถ่ายภาพ,Photography tutorial
拍,pāi,ยิง,shoot
传到网上,chuándào wǎngshàng,โพสต์บนอินเทอร์เน็ต,Posted to the Internet
传到,chuándào,ส่งไปยัง,transmitted to
获,huò,รับ,get
赚钱,zhuànqián,ทำเงิน,make money
总共,zǒnggòng,ทั้งหมด,total
开店,kāidiàn,เปิดร้าน,Open a store
周末,zhōumò,สุดสัปดาห์,weekend
只是,zhǐshì,เท่านั้น,only
生意,shēngyi,ธุรกิจ,Business
通常,tōngcháng,ปกติ,normally
一般,yībān,โดยทั่วไป,generally
平时,píngshí,โดยปกติ,Usually
以前,yǐqián,ก่อน,before
台湾,táiwān,ไต้หวัน,Taiwan
长时间,chángshíjiān,เวลานาน,long time
很久,hěn jiǔ,เวลานาน,long time
身体,shēntǐ,ร่างกาย,Body
眼镜,yǎnjìng,แว่นตา,Glasses
戴,dài,สวมใส่,Wear
戴眼镜,dàiyǎnjìng,สวมแว่นตา,wear glasses
防蓝光,fáng lánguāng,ป้องกันแสงสีฟ้า,Anti blue light
防止,fángzhǐ,ป้องกัน,prevent
都会,dū huì,"ก็จะ, ก็สามารถ, หรือ ทุกคนก็...","will, can, or everyone can..."
意外,yìwài,อุบัติเหตุ,Accident
为了,wèile,สำหรับ,for
腻,nì,เลี่ยน,greasy
待,dài,รักษา,treat
洗澡,xǐzǎo,อาบน้ำ,bath
理发,lǐfà,ตัดผม,haircut
理胡须,lǐ húxū,ตัดเครา,trim beard
洗衣机,xǐyījī,เครื่องซักผ้า,washing machine
逛,guàng,เยี่ยม,visit
街,jiē,ถนน,street
已经,yǐjīng,เรียบร้อยแล้ว,already
点外卖,diǎn wàimài,สั่งกลับบ้าน,Order takeout
甲亢哥,jiǎkàng gē,โอเวอร์แอคติ้ง,"overly dramatic, excessively energetic, or acting cringe"
口头禅,kǒutóuchán,คำพูดติดปาก,filler word
梦,mèng,ฝัน,Dream
像,xiàng,ดูเหมือน,seemed
像真的一样,xiàng zhēnde yīyàng,เหมือนจริง,like real
连续剧,liánxùjù,ละครโทรทัศน์,TV series
动画片,dònghuàpiàn,การ์ตูน,cartoon
缅甸,miǎndiàn,พม่า,Myanmar
地震,dìzhèn,แผ่นดินไหว,earthquake
余震,yúzhèn,อาฟเตอร์ช็อก,aftershock
曾经,céngjīng,เคย,once
时不时,shíbùshí,เป็นครั้งคราว,from time to time
震感,zhèngǎn,รู้สึกตกใจ,Feeling of shock
烤箱,kǎoxiāng,เตาอบ,oven
人民币,rénmínbì,หยวน,RMB
外卖公司,wàimài gōngsī,บริษัทจัดส่ง,Takeaway company
健康,jiànkāng,สุขภาพดี,healthy
冬天,dōngtiān,ฤดูหนาว,winter
多少度,duōshǎodù,กี่องศา,how many degrees
多少钱,duōshǎo qián,เท่าไร,How much
泼水节,pōshuǐjié,เทศกาลสงกรานต์,Songkran Festival
传统,chuántǒng,ธรรมเนียม,Tradition
农历,nónglì,ปฏิทินจันทรคติ,lunar calendar
参加,cānjiā,เข้าร่วม,join
街上,jiēshang,ถนน,street
留胡须,liú húxū,ไว้หนวด,grow a beard
体重,tǐzhòng,น้ำหนักตัว,body weight
下降,xiàjiàng,ลดลง,decrease
留长发,liú chángfà,ไว้ผมยาว,grow long hair
一百零五,yībǎi líng wǔ,หนึ่งร้อยห้า,one hundred five
公斤,gōngjīn,กิโลกรัม,kilogram
减肥,jiǎnféi,ลดน้ำหนัก,lose weight
健身房,jiànshēnfáng,โรงยิม,gym
两次,liǎng cì,สองครั้ง,twice
小费,xiǎofèi,ทิป,tip
水费,shuǐfèi,ค่าน้ำ,water bill
学费,xuéfèi,ค่าเล่าเรียน,tuition fee
块,kuài,บาท,baht (currency)
耗电,hàodiàn,การใช้ไฟฟ้า,power consumption
电费,diànfèi,ค่าไฟฟ้า,electricity bill
泰铢,tàizhū,บาทไทย,Thai baht
面包机,miànbāo jī,เครื่องทำขนมปัง,bread machine
蒸汽,zhēngqì,ไอน้ำ,steam
厨房,chúfáng,ครัว,kitchen
跑步机,pǎobù jī,ลู่วิ่ง,treadmill
热,rè,ร้อน,hot
度,dù,องศา,degree (temperature)
咖啡豆,kāfēi dòu,เมล็ดกาแฟ,coffee beans
豆浆,dòujiāng,น้ำเต้าหู้,soy milk
油条,yóutiáo,ปาท่องโก๋,fried dough stick
二手,èrshǒu,มือสอง,second-hand
厉害,lìhài,เก่ง,skilled
很少,hěn shǎo,น้อยมาก,very little
感觉,gǎnjué,ความรู้สึก; รู้สึก,feeling; to feel
精神,jīngshén,กำลังใจ; พลังงาน; ความกระปรี้กระเปร่า,spirit; energy; vigor
半,bàn,ครึ่ง,half
星期,xīngqī,สัปดาห์,week
周,zhōu,สัปดาห์,week
来自,láizì,มาจาก,to come from
学生,xuéshēng,นักเรียน,student
美国,Měiguó,สหรัฐอเมริกา,United States of America (USA)
请,qǐng,โปรด; เชิญ; เลี้ยง,please; to invite; to treat
帮,bāng,ช่วยเหลือ,to help
付,fù,จ่าย,to pay
酒店,jiǔdiàn,โรงแรม,hotel
订,dìng,จอง,to book; to reserve
课,kè,ชั้นเรียน; บทเรียน,class; lesson
包间,bāojiān,ห้องส่วนตัว (ในร้านอาหาร),private room (in a restaurant)
餐厅,cāntīng,ร้านอาหาร; ห้องอาหาร,restaurant; dining room
带,dài,พา; นำ; ถือ,to bring; to take; to carry
外面,wàimiàn,ข้างนอก,outside
逛街,guàngjiē,เดินเล่นดูของ; เดินเล่นตามถนน,to go window shopping; to stroll in the street
度假,dùjià,ไปพักร้อน,to go on vacation
在一起,zài yīqǐ,ด้วยกัน,together
多久,duōjiǔ,นานเท่าไหร่ (เวลา),how long (time)
家人,jiārén,สมาชิกในครอบครัว,family member(s)
但是,dànshì,แต่; อย่างไรก็ตาม,but; however
想,xiǎng,คิด; ต้องการ; คิดถึง,to think; to want; to miss
说,shuō,พูด; บอก,to say; to speak
家庭,jiātíng,ครอบครัว,family; household
彩礼,cǎilǐ,สินสอดทองหมั้น,betrothal gifts; bride price
认可,rènkě,เห็นชอบ; ยอมรับ,to approve; to recognize
觉得,juéde,รู้สึกว่า; คิดว่า,to feel; to think
重要,zhòngyào,สำคัญ,important
男,nán,ผู้ชาย,male
女,nǚ,ผู้หญิง,female
帅,shuài,หล่อ,handsome
泰国,Tàiguó,ประเทศไทย,Thailand
这样,zhèyàng,แบบนี้; เช่นนี้; อย่างนี้,like this; so; in this way
这么,zhème,ขนาดนี้; เช่นนี้; อย่างนี้,so; such; like this
区别,qūbié,ความแตกต่าง; แยกแยะ,difference; to distinguish
一样,yīyàng,เหมือนกัน,same; alike
每年,měinián,ทุกปี,every year
会,huì,สามารถ; จะ; เป็นไปได้; ประชุม,can; will; to be able to; meeting
家,jiā,บ้าน; ครอบครัว,home; family
每次,měi cì,ทุกครั้ง,every time
买东西,mǎi dōngxi,ซื้อของ,to buy things; shopping
今年,jīnnián,ปีนี้,this year
没,méi,ไม่ (ยังไม่ได้),not (have not)
见,jiàn,เห็น; พบ,to see; to meet
很多,hěn duō,มากมาย,many; a lot
经常,jīngcháng,บ่อยๆ,often; frequently
上个月,shàng ge yuè,เดือนที่แล้ว,last month
暑假,shǔjià,ปิดเทอมฤดูร้อน,summer vacation
兼职,jiānzhí,งานพาร์ทไทม์; งานพิเศษ,part-time job
情况,qíngkuàng,สถานการณ์,situation; circumstances
首都,shǒudū,เมืองหลวง,capital city
上次,shàng cì,ครั้งที่แล้ว,last time
吵,chǎo,เสียงดัง; ทะเลาะ,noisy; to quarrel
安静,ānjìng,เงียบ; สงบ,quiet; peaceful
演唱会,yǎnchànghuì,คอนเสิร์ต (การแสดงร้องเพลง),concert (vocal)
举行,jǔxíng,"จัด (งานประชุม, พิธี เป็นต้น)","to hold (a meeting, ceremony, etc.)"
好玩,hǎowán,สนุก; น่าสนใจ,fun; amusing; interesting
东西都,dōngxi dōu,ของทั้งหมด,all the things
所有东西,suǒyǒu dōngxi,ทุกสิ่งทุกอย่าง,all things; everything
生活,shēnghuó,ชีวิต; ใช้ชีวิต,life; to live
长期住,chángqī zhù,อาศัยอยู่ระยะยาว,to live long-term
往下一点,wǎng xià yīdiǎn,ต่ำลงหน่อย; ลงไปอีกนิด,a little lower; a bit further down
坚持,jiānchí,ยืนหยัด; ยืนกราน,to persist; to persevere; to insist on
关于,guānyú,เกี่ยวกับ,about; regarding; concerning
突然,tūrán,ทันใดนั้น; กะทันหัน,suddenly; abrupt
没有进步,méiyǒu jìnbù,ไม่มีพัฒนาการ; ไม่มีความคืบหน้า,no progress; haven't improved
贴,tiē,แปะ; ติด,to paste; to stick
冰箱,bīngxiāng,ตู้เย็น,refrigerator
配方,pèifāng,สูตรอาหาร; สูตร; ใบสั่งยา,recipe; formula; prescription
升,shēng,ลิตร; ขึ้น; เลื่อนตำแหน่ง,liter; to rise; to promote
毫升,háoshēng,มิลลิลิตร,milliliter
千,qiān,พัน,thousand
夏天,xiàtiān,ฤดูร้อน,summer
没那么热,méi nàme rè,ไม่ร้อนขนาดนั้น,not that hot
这个月,zhège yuè,เดือนนี้,this month
慢,màn,ช้า,slow
上完,shàngwán,"(เรียน/ทำงาน) เสร็จแล้ว, เลิก (เรียน/งาน) แล้ว","to finish (attending class, work, etc.)"
电视剧,diànshìjù,"ละครโทรทัศน์, ซีรีส์","TV series, TV drama"
蛇,shé,งู,snake
抓,zhuā,"ข่วน; คว้า, จับ; จับกุม",to scratch; to grab; to arrest
草,cǎo,หญ้า,grass
花,huā,ดอกไม้; ใช้ (เงิน/เวลา),flower; to spend (money/time)
池塘,chítáng,"สระน้ำ, บ่อน้ำ",pond
舅舅,jiùjiu,ลุง/น้า (น้องชายหรือพี่ชายของแม่),maternal uncle (mother's brother)
叔叔,shūshu,อา (น้องชายของพ่อ),paternal uncle (father's younger brother)
伯父,bófù,ลุง (พี่ชายของพ่อ),paternal uncle (father's older brother)
橙汁,chéngzhī,น้ำส้ม,Orange juice
美式,Měishì,อเมริกาโน่ (กาแฟ),Americano (coffee)
生椰拿铁,shēng yē nátiě,ลาเต้มะพร้าวสด,Raw Coconut Latte
连锁店,liánsuǒdiàn,"ร้านค้าสาขา, ร้านแฟรนไชส์",Chain store
柠檬茶,níngméng chá,ชามะนาว,Lemon tea
蜜雪冰城,Mìxuě Bīngchéng,มี่เสวี่ย ปิงเฉิง (ชื่อแบรนด์),Mixue Ice Cream & Tea (brand name)
特别的事情,tèbié de shìqing,เรื่องพิเศษ,A special matter/thing
超,chāo,"สุดยอด, โคตร; เกิน",super; to exceed
开汽车,kāi qìchē,ขับรถยนต์,To drive a car
路,lù,ถนน; เส้นทาง,Road; path
门票,ménpiào,"ตั๋วเข้าชม, ค่าเข้า",Entrance ticket
驯,xùn,ทำให้เชื่อง; เลี้ยงให้เชื่อง,to tame; to domesticate
真人版,zhēnrén bǎn,ฉบับคนแสดงจริง (live-action),live-action version
高手,gāoshǒu,ยอดฝีมือ; ผู้เชี่ยวชาญ; เซียน,expert; master
剧情,jùqíng,โครงเรื่อง; เนื้อเรื่อง,plot; storyline
龙,lóng,มังกร,dragon
外卖,wàimài,อาหารเดลิเวอรี่; อาหารสั่งกลับบ้าน,food delivery; takeout
外卖平台,wàimài píngtái,แพลตฟอร์มสั่งอาหารเดลิเวอรี่,food delivery platform
竞争,jìngzhēng,การแข่งขัน; แข่งขัน,competition; to compete
面包设备,miànbāo shèbèi,อุปกรณ์ทำขนมปัง,baking equipment
这么巧,zhème qiǎo,บังเอิญจัง!,What a coincidence!
发送,fā sòng,ส่ง,to send
门口,ménkǒu,"ทางเข้าประตู, หน้าประตู",doorway; entrance
看完电影,kàn wán diànyǐng,หลังจากดูหนังจบ,after finishing watching the movie
玩得开心,wán de kāixīn,"ขอให้สนุก, เที่ยวให้สนุก",to have fun; have a good time
多长时间 / 多久,duō cháng shíjiān / duōjiǔ,นานเท่าไหร่ (เวลา),how long (time)
告诉,gàosù,บอก,to tell
讲个故事,jiǎng ge gùshi,เล่านิทาน,to tell a story
客户,kèhù,ลูกค้า (ที่ใช้บริการประจำ),client; customer
讲讲,jiǎngjiang,"เล่าให้ฟังหน่อย, พูดถึงหน่อย",to talk about; to tell (casual)
遇到,yùdào,"พบเจอ, เจอโดยบังเอิญ",to encounter; to run into
客人,kèrén,"แขก, ลูกค้า (ทั่วไป)",guest; customer; visitor
特价,tèjià,ราคาพิเศษ,special price; sale
一件,yī jiàn,"หนึ่งชิ้น, หนึ่งตัว (ลักษณนามของเสื้อผ้า, เรื่องราว)","one piece (measure word for clothes, matters)"
像...一样,xiàng...yīyàng,เหมือนกับ...,like...; as if...
被蚊子咬了,bèi wénzi yǎo le,โดนยุงกัด,to be bitten by a mosquito
空地,kòngdì,ที่ดินว่างเปล่า; ที่ว่าง,vacant lot; empty space
蚊香,wénxiāng,ยาจุดกันยุง,mosquito coil
蚊帐,wénzhàng,มุ้ง,mosquito net
大部分,dàbùfen,ส่วนใหญ่,the majority; most
主业,zhǔyè,อาชีพหลัก,main occupation; primary job
副业,fùyè,อาชีพเสริม,side job; secondary occupation
换衣服,huàn yīfu,เปลี่ยนเสื้อผ้า,to change clothes
有难度的课,yǒu nándù de kè,คลาสเรียนที่ยาก,a difficult class/lesson
有道理,yǒu dàolǐ,มีเหตุผล,to make sense; reasonable
牙刷,yáshuā,แปรงสีฟัน,toothbrush
这句话,zhè jù huà,ประโยคนี้,this sentence
黑人牙膏,Hēirén Yágāo,ยาสีฟันดาร์ลี่,Darlie Toothpaste (brand name)
没有想到,méiyǒu xiǎngdào,คิดไม่ถึง,to have not expected
让我想一下,ràng wǒ xiǎng yīxià,ขอฉันคิดแป๊บนึง,Let me think for a moment.
电动,diàndòng,ไฟฟ้า (ที่ใช้ไฟฟ้า),electric
我试过几次,wǒ shìguò jǐ cì,ฉันเคยลองหลายครั้งแล้ว,I have tried it a few times.
加油,jiāyóu,"สู้ๆ!, พยายามเข้า!",Go for it!; Good luck!; Cheer up!
手表,shǒubiǎo,นาฬิกาข้อมือ,wristwatch
心率,xīnlǜ,อัตราการเต้นของหัวใจ,heart rate
双11,Shuāng Shíyī,11.11 (เทศกาลช้อปปิ้งคนโสด),Double 11 (Singles' Day shopping festival)
搞活动,gǎo huódòng,จัดกิจกรรม / จัดโปรโมชั่น,to hold an event / promotion
打折,dǎzhé,ลดราคา,to give a discount
优惠,yōuhuì,สิทธิพิเศษ; ส่วนลด,favorable; preferential; discount
购物,gòuwù,การช้อปปิ้ง; ซื้อของ,shopping; to go shopping
还很久,hái hěn jiǔ,ยังอีกนาน,still a long time away
邻居,línjū,เพื่อนบ้าน,neighbor
网站,wǎngzhàn,เว็บไซต์,website
谷歌会议,Gǔgē huìyì,Google Meet,Google Meet
这两天,zhè liǎng tiān,สองวันนี้,these two days
这几天,zhè jǐ tiān,สองสามวันนี้,these few days
上学的时候,shàngxué de shíhou,ตอนที่เรียนหนังสือ,when at school
热闹,rènao,คึกคัก; มีชีวิตชีวา,lively; bustling
农村,nóngcūn,ชนบท,countryside; rural area
小岛,xiǎodǎo,เกาะเล็กๆ,small island; islet
世界历史,shìjiè lìshǐ,ประวัติศาสตร์โลก,world history
清朝,Qīngcháo,ราชวงศ์ชิง,Qing Dynasty
三分之一,sān fēn zhī yī,หนึ่งในสาม (1/3),one third (1/3)
大船,dà chuán,เรือใหญ่,big ship; ferry
纪念品,jìniànpǐn,ของที่ระลึก,souvenir
签证,qiānzhèng,วีซ่า,visa
刚起来,gāng qǐlái,เพิ่งตื่น,just got up; just woke up
动作,dòngzuò,ท่าทาง; การเคลื่อนไหว,action; movement
冲凉,chōngliáng,อาบน้ำ (ภาษาพูด),to take a shower (colloquial)
原因,yuányīn,เหตุผล; สาเหตุ,reason; cause
泰语另一个词,Tàiyǔ lìng yī ge cí,อีกคำในภาษาไทย,another word in Thai
寺庙,sìmiào,วัด,temple
肯定有,kěndìng yǒu,มีแน่นอน,definitely have
虫子,chóngzi,แมลง,insect; bug
和尚,héshang,พระสงฆ์,(Buddhist) monk
芒果,mángguǒ,มะม่วง,mango
小时,xiǎoshí,ชั่วโมง,hour
钟,zhōng,นาฬิกา; ชั่วโมง (ภาษาพูด),clock; hour (colloquial)
信,xìn,เชื่อ; ศรัทธา,to believe; to trust
佛教,Fójiào,ศาสนาพุทธ,Buddhism
旁边,pángbiān,ข้างๆ,beside; next to
种,zhòng,ปลูก (พืช),to plant
水稻,shuǐdào,"ข้าวเปลือก, นาข้าว",paddy (rice)
雇佣,gùyōng,ว่าจ้าง,to hire; to employ
够,gòu,"พอ, เพียงพอ",enough; sufficient
获得,huòdé,ได้รับ,to obtain; to receive; to get
出去,chūqù,ออกไป,to go out
搬家,bānjiā,ย้ายบ้าน,to move house
换,huàn,เปลี่ยน; แลกเปลี่ยน,to change; to exchange
涨价,zhǎngjià,ขึ้นราคา,to raise the price
需要有人照看,xūyào yǒurén zhàokàn,ต้องการคนดูแล,needs someone to look after
年轻,niánqīng,"หนุ่ม, สาว, อายุน้อย",young
成年人,chéngniánrén,ผู้ใหญ่,adult
考驾照,kǎo jiàzhào,สอบใบขับขี่,to take a driver's license test
驾校,jiàxiào,โรงเรียนสอนขับรถ,driving school
危险,wēixiǎn,อันตราย,dangerous; danger
自信,zìxìn,ความมั่นใจในตนเอง; มั่นใจในตนเอง,self-confidence; self-confident
去世,qùshì,"เสียชีวิต, ถึงแก่กรรม (คำสุภาพ)",to pass away (polite term)
酒吧,jiǔbā,บาร์,bar; pub
网吧,wǎngbā,ร้านอินเทอร์เน็ต,internet cafe
国际版,guójì bǎn,"เวอร์ชั่นสากล, เวอร์ชั่นอินเตอร์",international version
酷,kù,"คูล, เจ๋ง (คำทับศัพท์)",cool (loanword)
头发,tóufa,ผม,hair (on the head)
理发店,lǐfàdiàn,ร้านตัดผม,barbershop; hair salon
理发器,lǐfàqì,ปัตตาเลี่ยนตัดผม,hair clippers
24小时营业,èrshísì xiǎoshí yíngyè,เปิด 24 ชั่วโมง,open 24 hours
开门,kāimén,เปิดประตู; เปิดร้าน,to open the door; to start business for the day
关门,guānmén,ปิดประตู; ปิดร้าน,to close the door; to close up shop
控制饮食,kòngzhì yǐnshí,ควบคุมอาหาร,to control one's diet
饮食均衡,yǐnshí jūnhéng,อาหารที่สมดุล,balanced diet
去年,qùnián,ปีที่แล้ว,last year
增肥,zēngféi,เพิ่มน้ำหนัก,to gain weight
增加体重,zēngjiā tǐzhòng,เพิ่มน้ำหนักตัว,to increase body weight
减少体重,jiǎnshǎo tǐzhòng,ลดน้ำหนักตัว,to reduce body weight
肌肉,jīròu,กล้ามเนื้อ,muscle
增肌,zēngjī,สร้างกล้ามเนื้อ,to build muscle; muscle gain
广告,guǎnggào,โฆษณา,advertisement
营养品,yíngyǎngpǐn,ผลิตภัณฑ์เสริมอาหาร; อาหารเสริม,nutritional supplement; nourishment
减肥药,jiǎnféiyào,ยาลดความอ้วน,weight-loss drugs/pills
成功,chénggōng,ความสำเร็จ; ประสบความสำเร็จ,success; successful
搬东西,bān dōngxi,"ย้ายของ, ขนของ",to move things
郊区,jiāoqū,ชานเมือง,suburbs; outskirts
管理,guǎnlǐ,จัดการ; การจัดการ,to manage; management
毕业,bìyè,จบการศึกษา; การสำเร็จการศึกษา,to graduate; graduation
生病,shēngbìng,"ป่วย, ไม่สบาย",to get sick; to fall ill
献血,xiànxuè,บริจาคเลือด,to donate blood
学历,xuélì,วุฒิการศึกษา,educational background; academic credentials
小学,xiǎoxué,โรงเรียนประถม,elementary school
高中,gāozhōng,โรงเรียนมัธยมปลาย,high school
大学,dàxué,มหาวิทยาลัย,university; college
外卖员,wàimàiyuán ,พนักงานส่งอาหาร,food delivery driver / rider
骑手,qíshǒu,ไรเดอร์,food delivery driver / rider
每天在路上,měitiān zài lùshang,อยู่บนถนนทุกวัน,on the road every day
自由,zìyóu,"อิสระ, เสรีภาพ",freedom; free
学历是敲门砖,xuélì shì qiāoménzhuān,วุฒิการศึกษาเป็นใบเบิกทาง,Education is a stepping stone (lit. a brick to knock on the door)
继续读书,jìxù dúshū,เรียนต่อ,to continue studying
低,dī,ต่ำ,low
还是很重要,háishì hěn zhòngyào,ยังคงสำคัญมาก,still very important
好像,hǎoxiàng,"เหมือนจะ, ดูเหมือนว่า",to seem like; as if
质量,zhìliàng,คุณภาพ,quality
别的,biéde,อื่นๆ,other
就好,jiù hǎo,"ก็ดีแล้ว, ก็ดี",then it's good; will be fine
倒霉,dǎoméi,"เคราะห์ร้าย, ซวย",unlucky; to have bad luck
疼,téng,"ปวด, เจ็บ",to ache; sore; painful
腿,tuǐ,ขา,leg
介绍,jièshào,แนะนำ,to introduce
描述,miáoshù,"อธิบาย, บรรยาย",to describe
又...又...,yòu...yòu...,ทั้ง...และ...,both... and...
要不然,yàoburán,"ไม่อย่างนั้น, ไม่งั้น",otherwise
睡过头,shuìguòtóu,"นอนเลยเวลา, นอนตื่นสาย",to oversleep
配,pèi,"เข้ากันกับ, จับคู่กับ",to pair with; to match
炸鸡,zhájī,ไก่ทอด,fried chicken
可乐,kělè,โค้ก,cola
饮料,yǐnliào,เครื่องดื่ม,beverage; drink
下饭,xiàfàn,"(กับข้าวที่) ทำให้เจริญอาหาร, กินกับข้าวอร่อย",(of a dish) goes well with rice; appetizing
字母,zìmǔ,ตัวอักษร,letter (of an alphabet)
爆炸,bàozhà,การระเบิด; ระเบิด,explosion; to explode
复杂,fùzá,ซับซ้อน,complicated; complex
动词变位,dòngcí biànwèi,การผันกริยา,verb conjugation
名词性别,míngcí xìngbié,เพศของคำนาม,noun gender
既然,jìrán,ในเมื่อ,since; now that
兴趣,xìngqù,ความสนใจ,interest
放鸽子,fàng gēzi,"เท, เบี้ยวนัด (ภาษาพูด)",to stand someone up; to flake (slang)
发消息,fā xiāoxi,ส่งข้อความ,to send a message
不止一次,bùzhǐ yīcì,ไม่ใช่แค่ครั้งเดียว,more than once
一对一的课程,yīduìyī de kèchéng,คลาสเรียนแบบตัวต่อตัว,one-on-one course/class
从来没有,cónglái méiyǒu,ไม่เคยเลย,never
面包车,miànbāochē,รถตู้,van; minivan
其他城市,qítā chéngshì,เมืองอื่นๆ,other cities
节假日,jiéjiàrì,วันหยุดเทศกาล,holiday; festival day
佛教节,Fójiào jié,วันสำคัญทางศาสนาพุทธ,Buddhist festival
没关系,méiguānxi,ไม่เป็นไร,it doesn't matter; it's okay; no problem
圣诞节,Shèngdànjié,วันคริสต์มาส,Christmas
放假,fàngjià,"หยุด, มีวันหยุด",to have a holiday or vacation
露营,lùyíng,ตั้งแคมป์,to camp; camping
搭帐篷,dā zhàngpeng,กางเต็นท์,to put up a tent
中年人,zhōngniánrén,คนวัยกลางคน,middle-aged person
不到一个小时,bùdào yī ge xiǎoshí,ไม่ถึงหนึ่งชั่วโมง,less than an hour
上上个月,shàng shàng ge yuè,เดือนก่อนหน้านี้,the month before last
点菜,diǎn cài,สั่งอาหาร,to order dishes (from a menu)
洗冷水澡,xǐ lěngshuǐ zǎo,อาบน้ำเย็น,to take a cold shower / bath
大多数人,dàduōshù rén,คนส่วนใหญ่,most people; the majority of people
长袖,chángxiù,แขนยาว,long sleeves
普遍,pǔbiàn,ทั่วไป; แพร่หลาย,common; universal; widespread
球类运动,qiúlèi yùndòng,กีฬาที่ใช้ลูกบอล,ball sports
大学毕业,dàxué bìyè,จบการศึกษาจากมหาวิทยาลัย,to graduate from university
私立大学,sīlì dàxué,มหาวิทยาลัยเอกชน,private university
高大上,gāodàshàng,"(สแลง) หรูหรา, ไฮเอนด์, ดูดีมีระดับ",(slang) high-end; classy; upscale
高富帅,gāofùshuài,"(สแลง) ""เทพบุตร"" (สูง, รวย, หล่อ)","(slang) ""Mr. Perfect"" (tall, rich, handsome)"
白富美,báifùměi,"(สแลง) ""นางฟ้า"" (ขาว, รวย, สวย)","(slang) ""Ms. Perfect"" (fair-skinned, rich, beautiful)"
性感,xìnggǎn,เซ็กซี่,sexy
够用,gòuyòng,พอใช้,enough to use
公园,gōngyuán,สวนสาธารณะ,park
很有钱,hěn yǒu qián,รวยมาก,very rich
两台车,liǎng tái chē,รถสองคัน,two cars
语境,yǔjìng,บริบท,context
电器,diànqì,เครื่องใช้ไฟฟ้า,electrical appliance
其实,qíshí,"จริงๆ แล้ว, อันที่จริง",actually; in fact
堵车 / 塞车,dǔchē / sāichē,รถติด,traffic jam
闯红灯,chuǎng hóngdēng,ฝ่าไฟแดง,to run a red light
摄像头,shèxiàngtóu,"กล้องวงจรปิด, กล้องเว็บแคม","camera (surveillance, webcam)"
银行,yínháng,ธนาคาร,bank
监控,jiānkòng,การสอดส่องดูแล; ตรวจตรา,surveillance; to monitor
自动取款机,zìdòng qǔkuǎnjī,ตู้เอทีเอ็ม,ATM (Automated Teller Machine)
贷款,dàikuǎn,เงินกู้; การกู้ยืมเงิน,loan; to take out a loan
现金,xiànjīn,เงินสด,cash
多音字,duōyīnzì,อักษรหลายเสียง,character with multiple pronunciations
多个发音,duō ge fāyīn,หลายเสียงอ่าน,multiple pronunciations
提前,tíqián,ล่วงหน้า,in advance; ahead of time
心情,xīnqíng,อารมณ์; สภาพจิตใจ,mood; state of mind
打疫苗,dǎ yìmiáo,ฉีดวัคซีน,to get vaccinated
检查身体,jiǎnchá shēntǐ,ตรวจร่างกาย,to have a physical check-up
努力锻炼,nǔlì duànliàn,ออกกำลังกายอย่างหนัก,to work out hard; to exercise diligently
免费,miǎnfèi,ฟรี,free of charge
检查,jiǎnchá,ตรวจ; การตรวจ,to check; to inspect; examination
结果,jiéguǒ,ผลลัพธ์,result; outcome
拿到,nádào,ได้รับ,to get; to obtain; to receive
加入,jiārù,เข้าร่วม,to join; to enter
项目,xiàngmù,โครงการ; รายการ,project; item
穷人,qióngrén,คนจน,poor person/people
保险,bǎoxiǎn,ประกันภัย,insurance
医疗保险,yīliáo bǎoxiǎn,ประกันสุขภาพ,medical insurance
意外保险,yìwài bǎoxiǎn,ประกันอุบัติเหตุ,accident insurance
报销,bàoxiāo,"เบิกเงิน, การเบิกเงิน",to reimburse; reimbursement
等很久,děng hěn jiǔ,รอนานมาก,to wait for a long time
排队,páiduì,"เข้าคิว, ต่อแถว",to queue up; to line up
没有睡醒,méiyǒu shuìxǐng,ยังไม่ตื่นดี; ยังงัวเงีย,not fully awake; still sleepy
微信聊天,Wēixìn liáotiān,คุยวีแชท,to chat on WeChat
台风,táifēng,ไต้ฝุ่น,typhoon
严重,yánzhòng,รุนแรง; ร้ายแรง,serious; severe
影响不大,yǐngxiǎng bùdà,ผลกระทบไม่มาก,not much impact/effect
平常,píngcháng,"ปกติ, โดยปกติ",usually; ordinarily
缺水,quēshuǐ,ขาดแคลนน้ำ,to be short of water; water scarcity
就算,jiùsuàn,ต่อให้,even if
即使,jíshǐ,ถึงแม้ว่า,even though
发洪水,fā hóngshuǐ,น้ำท่วม,to flood
要看,yàokàn,ต้องดู,it depends on
取决于,qǔjuéyú,ขึ้นอยู่กับ,it depends on
我懒得想,wǒ lǎndé xiǎng,ฉันขี้เกียจที่จะคิด,I can't be bothered to think
消息,xiāoxi,ข่าว; ข้อความ,news; message; information
满意,mǎnyì,พอใจ,satisfied; pleased
佛系,fóxì,"(สแลง) สายชิล, สไตล์ปล่อยวาง","(slang) ""Buddha-like""; chill, laid-back, not striving"
薄荷糖,bòhetáng,ลูกอมมินต์,mint; peppermint candy
蹦极,bèngjí,บันจี้จัมพ์,bungee jumping
敢,gǎn,กล้า,to dare
几包,jǐ bāo,"กี่ห่อ, กี่ซอง",how many packs/bags
毒,dú,ยาพิษ; เป็นพิษ,poison; poisonous
记得,jìde,จำได้,to remember
搞笑,gǎoxiào,"ตลก, ขำขัน",funny; amusing
一点也不,yīdiǎn yě bù,ไม่...เลยแม้แต่น้อย,not at all
活动,huódòng,กิจกรรม,activity; event
多云,duōyún,มีเมฆมาก,cloudy
乌云,wūyún,เมฆดำ,dark clouds
移动,yídòng,"เคลื่อนที่, ย้าย",to move
挡雨的地方,dǎngyǔ de dìfang,ที่หลบฝน,a place to shelter from the rain
羽毛球,yǔmáoqiú,แบดมินตัน,badminton
时间不一致,shíjiān bù yīzhì,เวลาไม่ตรงกัน,time doesn't match up; inconsistent timing
随机,suíjī,สุ่ม,random
寺庙方丈,sìmiào fāngzhang,เจ้าอาวาสวัด,temple abbot
不允许,bù yǔnxǔ,ไม่อนุญาต,not allowed; to not permit
禁止,jìnzhǐ,ห้าม,to prohibit; to forbid
奇怪,qíguài,แปลก,strange; weird
音乐表演,yīnyuè biǎoyǎn,การแสดงดนตรี,music performance
别人,biérén,คนอื่น,"other people, others"
别的工作,bié de gōngzuò,งานอื่น,other jobs
零件图,língjiàntú,แบบชิ้นส่วน,part drawing; component diagram
建筑专业,jiànzhù zhuānyè,สาขาสถาปัตยกรรม,architecture major
疫情,yìqíng,โรคระบาด,epidemic
新冠,xīnguān,โควิด-19,COVID-19; novel coronavirus
政府,zhèngfǔ,รัฐบาล,government
法律,fǎlǜ,กฎหมาย,law
表哥,biǎogē,ลูกพี่ลูกน้อง (ผู้ชาย ฝ่ายแม่),older male cousin (maternal)
发音,fāyīn,การออกเสียง,pronunciation
和以前一样,hé yǐqián yīyàng,เหมือนเมื่อก่อน,same as before
声音,shēngyīn,เสียง,sound; voice
超级大暴雨,chāojí dà bàoyǔ,พายุฝนฟ้าคะนองรุนแรงมาก,super heavy rainstorm
停电,tíngdiàn,ไฟดับ,power outage
非洲,Fēizhōu,ทวีปแอฟริกา,Africa
足够,zúgòu,เพียงพอ,enough
食物,shíwù,อาหาร,food
基因,jīyīn,ยีน,gene
遗传,yíchuán,"กรรมพันธุ์, การสืบทอดทางพันธุกรรม",heredity; to inherit (genetically)
习惯,xíguàn,"ความเคยชิน, นิสัย",habit; to be used to
西方国家,xīfāng guójiā,ประเทศตะวันตก,Western countries
高级,gāojí,"ระดับสูง, ขั้นสูง",high-level; advanced; senior
初级,chūjí,"ระดับต้น, ขั้นต้น",primary; elementary
初中,chūzhōng,มัธยมต้น,junior high school
8月初,bā yuè chū,ต้นเดือนสิงหาคม,early August
8月末,bā yuè mò,ปลายเดือนสิงหาคม,late/end of August
日历,rìlì,ปฏิทิน,calendar
时间表,shíjiānbiǎo,ตารางเวลา,schedule; timetable
长期,chángqī,ระยะยาว,long-term
特殊情况,tèshū qíngkuàng,สถานการณ์พิเศษ,special circumstances
总的,zǒngde,โดยรวมแล้ว,overall; total
一起加起来,yīqǐ jiā qǐlái,รวมกันทั้งหมด,to add up together
有点多,yǒudiǎn duō,เยอะไปหน่อย,a bit too much
误会,wùhuì,เข้าใจผิด,to misunderstand; misunderstanding
软件,ruǎnjiàn,ซอฟต์แวร์,software
再次,zàicì,อีกครั้ง,once again
取消,qǔxiāo,ยกเลิก,to cancel
本来,běnlái,เดิมที,originally
这就是为啥,zhè jiùshì wèishá,นี่คือเหตุผล,this is why (colloquial)
记起来了,jì qǐlái le,จำได้แล้ว,(I) remember now
想起来了,xiǎng qǐlái le,นึกออกแล้ว,(I) recall now
近,jìn,ใกล้,near; close
远,yuǎn,ไกล,far; distant
工作日,gōngzuòrì,วันทำงาน,workday; working day
教室,jiàoshì,ห้องเรียน,classroom
网络,wǎngluò,"อินเทอร์เน็ต, เครือข่าย",internet; network
养鱼,yǎng yú,เลี้ยงปลา,to raise fish
照片,zhàopiàn,รูปถ่าย,photograph; picture
图片,túpiàn,รูปภาพ,image; picture
养鱼赚钱,yǎng yú zhuànqián,เลี้ยงปลาหาเงิน,to raise fish to earn money
异国,yìguó,"ต่างประเทศ, ต่างแดน",foreign country
奇异的动物,qíyì de dòngwù,สัตว์แปลกๆ,exotic/strange animal
除以,chúyǐ,หารด้วย,to divide by
收入,shōurù,รายได้,income
成本,chéngběn,ต้นทุน,cost
生宝宝,shēng bǎobao,คลอดลูก,to give birth to a baby
怀孕,huáiyùn,"ตั้งครรภ์, ตั้งท้อง",to be pregnant
手术,shǒushù,การผ่าตัด,surgery; operation
公,gōng,ตัวผู้,male (for animals)
母,mǔ,ตัวเมีย,female (for animals)
公鸡,gōngjī,ไก่ตัวผู้,rooster
脏,zāng,สกปรก,dirty
坐,zuò,นั่ง,to sit
站,zhàn,ยืน,to stand
招聘,zhāopìn,รับสมัครงาน,to recruit; to hire
租,zū,เช่า,to rent
摊位,tānwèi,แผงลอย,stall; booth
摆地摊,bǎi dìtān,ตั้งแผงลอย,to set up a street stall
第一个摊位,dì yī ge tānwèi,แผงลอยแรก,the first stall
当然,dāngrán,แน่นอน,of course
私人,sīrén,ส่วนตัว,private; personal
二十四小时营业,èrshísì xiǎoshí yíngyè,เปิด 24 ชั่วโมง,open 24 hours
保温杯,bǎowēnbēi,"กระติกน้ำร้อน, กระติกเก็บความร้อน",vacuum flask; thermos
玻璃杯,bōlibēi,แก้วน้ำ,glass; glass cup
孔雀鱼,kǒngquèyú,ปลาหางนกยูง,guppy
历史,lìshǐ,ประวัติศาสตร์,history
意思,yìsi,ความหมาย,meaning
应该,yīnggāi,"ควร, ควรจะ",should; ought to
语法,yǔfǎ,ไวยากรณ์,grammar
满头大汗,mǎntóudàhàn,เหงื่อท่วมหัว,drenched in sweat; sweating profusely
把字句,bǎzìjù,ประโยคที่มี 把,bǎ sentence structure
被字句,bèizìjù,ประโยคที่มี 被,bèi sentence structure (passive)
句子,jùzi,ประโยค,sentence
头盔,tóukuī,หมวกกันน็อค,helmet
罚款,fákuǎn,ค่าปรับ,fine; to fine
困惑,kùnhuò,สับสน,confused; perplexed
疑惑,yíhuò,สงสัย,to feel uncertain; to doubt
感到很疑惑,gǎndào hěn yíhuò,รู้สึกสงสัยมาก,to feel very doubtful/confused
打字,dǎzì,พิมพ์ดีด,to type
一台机器,yī tái jīqì,เครื่องจักรหนึ่งเครื่อง,one machine
量词,liàngcí,ลักษณนาม,measure word; classifier
冰柜,bīngguì,ตู้แช่แข็ง,freezer
书柜,shūguì,ตู้หนังสือ,bookcase; bookshelf
城市,chéngshì,เมือง,city
上节课,shàng jié kè,คาบที่แล้ว,last class
短,duǎn,สั้น,short
长,cháng,ยาว,long
骂,mà,ด่า,to scold; to curse
年龄比我大,niánlíng bǐ wǒ dà,อายุมากกว่าฉัน,older than me
一分钟,yī fēnzhōng,หนึ่งนาที,one minute
定了闹钟,dìngle nàozhōng,ตั้งนาฬิกาปลุกแล้ว,set an alarm clock
不好意思,bù hǎoyìsi,"ขอโทษ (ใช้เกริ่นนำ, แสดงความเกรงใจ)",excuse me; sorry
更加口语,gèngjiā kǒuyǔ,เป็นภาษาพูดมากขึ้น,more colloquial
没事,méishì,ไม่เป็นไร,it's nothing; I'm fine
晚上5点到9点,wǎnshang wǔ diǎn dào jiǔ diǎn,ห้าโมงเย็นถึงสามทุ่ม,5 PM to 9 PM
下午两点,xiàwǔ liǎng diǎn,บ่ายสองโมง,2:00 PM
一半,yībàn,ครึ่งหนึ่ง,half
百分之50,bǎi fēn zhī wǔshí,ห้าสิบเปอร์เซ็นต์,50 percent
怎么可能,zěnme kěnéng,เป็นไปได้อย่างไร,how is that possible?
长期学生,chángqī xuésheng,นักเรียนระยะยาว,long-term student
生小鱼,shēng xiǎo yú,คลอดลูกปลา,to give birth to baby fish
鱼缸,yúgāng,ตู้ปลา,fish tank
水妖精,shuǐyāojing,ฟองน้ำกรองตู้ปลา,sponge filter (for aquarium)
石头,shítou,หิน,stone; rock
安全帽,ānquánmào,หมวกนิรภัย,safety helmet
工地,gōngdì,ไซต์ก่อสร้าง,construction site
管理人员,guǎnlǐ rényuán,"เจ้าหน้าที่ฝ่ายบริหาร, ผู้จัดการ",management personnel; manager
技术,jìshù,"เทคโนโลยี, เทคนิค",technology; skill
晒得非常黑,shài de fēicháng hēi,ตากแดดจนดำมาก,to be tanned very dark
更加,gèngjiā,"ยิ่ง, ยิ่งขึ้น",even more
防晒,fángshài,กันแดด,sun protection
防晒霜,fángshàishuāng,ครีมกันแดด,sunscreen
皮肤,pífū,"ผิว, ผิวหนัง",skin
短袖,duǎnxiù,เสื้อแขนสั้น,short-sleeved shirt
短裤,duǎnkù,กางเกงขาสั้น,shorts
拖鞋,tuōxié,รองเท้าแตะ,slippers; flip-flops
市场,shìchǎng,ตลาด,market
商场,shāngchǎng,ห้างสรรพสินค้า,shopping mall
不在乎,bù zàihu,"ไม่สนใจ, ไม่แคร์",don't care
不在意,bù zàiyì,"ไม่ใส่ใจ, ไม่ถือสา",don't mind
游客,yóukè,นักท่องเที่ยว,tourist
穿运动鞋,chuān yùndòngxié,ใส่รองเท้ากีฬา,to wear sneakers
你也一样,Nǐ yě yīyàng,คุณก็เช่นกัน,You too; same to you
脚,jiǎo,เท้า,foot
腰,yāo,"เอว, หลังส่วนล่าง",waist; lower back
皮带,pídài,เข็มขัด,belt
瘦了很多,shòule hěn duō,ผอมลงไปเยอะ,lost a lot of weight
出院的时候,chūyuàn de shíhou,ตอนออกจากโรงพยาบาล,when being discharged from hospital
腰部手术,yāobù shǒushù,การผ่าตัดบริเวณเอว,waist/back surgery
解释,jiěshì,อธิบาย,to explain
这条路,zhè tiáo lù,ถนนเส้นนี้,this road
下午差不多4点半,xiàwǔ chàbuduō sì diǎn bàn,ประมาณบ่ายสี่โมงครึ่ง,around 4:30 PM
搬到别的地方卖,bān dào bié de dìfang mài,ย้ายไปขายที่อื่น,move to another place to sell
30公里每小时,sānshí gōnglǐ měi xiǎoshí,30 กิโลเมตรต่อชั่วโมง,30 kilometers per hour
出门,chūmén,"ออกจากบ้าน, ออกไปข้างนอก",to go out
视线很好,shìxiàn hěn hǎo,ทัศนวิสัยดีมาก,the line of sight is very good
次道,cì dào,"ทางโท, เลนรอง",secondary road; side road
主道,zhǔ dào,"ทางเอก, เลนหลัก",main road; main lane
主路,zhǔ lù,ถนนสายหลัก,main road
交通事故,jiāotōng shìgù,อุบัติเหตุจราจร,traffic accident
驾驶证,jiàshǐzhèng,ใบขับขี่,driver's license
违法,wéifǎ,ผิดกฎหมาย,to break the law; illegal
笨,bèn,โง่,stupid
蠢,chǔn,"โง่, ทึ่ม",stupid; foolish
蠢货,chǔnhuò,ไอ้โง่ (คำด่ารุนแรง),idiot; fool (strong insult)
经过,jīngguò,"ผ่าน, ผ่านไป",to pass by; to go through
摔倒了,shuāidǎole,ล้มลง,fell down
飞出去,fēi chūqù,กระเด็นออกไป,to fly out
桥的围栏,qiáo de wéilán,ราวกั้นสะพาน,bridge railing
全身,quánshēn,ทั้งตัว,entire body
刮伤,guāshāng,"รอยขีดข่วน, แผลถลอก",scratch; abrasion
流血,liúxuè,เลือดออก,to bleed
交警,jiāojǐng,ตำรวจจราจร,traffic police
交通警察,jiāotōng jǐngchá,ตำรวจจราจร,traffic police
划分责任,huàfēn zérèn,แบ่ง/ชี้ชัดความรับผิดชอบ,to assign/divide responsibility
法院,fǎyuàn,ศาล,court (of law)
花很多时间,huā hěn duō shíjiān,ใช้เวลาเยอะมาก,to spend a lot of time
好了九成,hǎole jiǔ chéng,ดีขึ้นเก้าส่วน (90%) แล้ว,90% recovered
康复,kāngfù,"ฟื้นตัว, พักฟื้น",to recover (from an illness)
瘦,shòu,ผอม,Thin / Lean
头发,tóu fa,เส้นผม,Hair
理发,lǐ fà,ตัดผม,Haircut / Barber
理发器,lǐ fà qì,ปัตตาเลี่ยน / เครื่องตัดผม,Hair clipper
发型,fà xíng,ทรงผม,Hairstyle
超短,chāo duǎn,สั้นมาก,Super short
超喜欢,chāo xǐ huan,ชอบมากๆ,Like very much
普遍,pǔ biàn,"ทั่วไป, แพร่หลาย",Common / Universal
意外的事故,yì wài de shì gù,อุบัติเหตุที่ไม่คาดคิด,Unexpected accident
老鼠,lǎo shǔ,หนู,Rat / Mouse
夹子,jiā zi,"กิ๊บ, ที่หนีบ, คีม",Clip / Clamp / Peg
扔了,rēng le,ทิ้งแล้ว,Threw away
扔垃圾,rēng lā jī,ทิ้งขยะ,Throw trash
老鼠笼,lǎo shǔ lóng,กรงหนู,Rat cage
夹住后,jiā zhù hòu,หลังจากหนีบแล้ว,After clamping
垃圾桶,lā jī tǒng,ถังขยะ,Trash can
可能,kě néng,"อาจจะ, เป็นไปได้",Maybe / Possible
花花草草,huā huā cǎo cǎo,ดอกไม้ใบหญ้า (พืชพรรณต่างๆ),Flowers and plants
动物尸体,dòng wù shī tǐ,ซากสัตว์,Animal carcass
随便,suí biàn,"ตามสบาย, แล้วแต่, อะไรก็ได้",Casual / Whatever / As you please
医院,yī yuàn,โรงพยาบาล,Hospital
二手烟,èr shǒu yān,ควันบุหรี่มือสอง,Second-hand smoke
停车场,tíng chē chǎng,ลานจอดรถ,Parking lot
诊所,zhěn suǒ,คลินิก,Clinic
卫生所,wèi shēng suǒ,สถานีอนามัย,Health center
烂,làn,"เน่า, เปื่อย, แย่มาก",Rotten / Bad / Lousy
任何地方,rèn hé dì fāng,"สถานที่ใดก็ตาม, ทุกที่",Anywhere / Any place
西方国家,xī fāng guó jiā,ประเทศตะวันตก,Western countries
圣诞节,shèng dàn jié,วันคริสต์มาส,Christmas
双11,shuāng shí yī,วันคนโสด (11.11) / เทศกาลช้อปปิ้ง,Double 11 (Shopping Festival)
购物节,gòu wù jié,เทศกาลช้อปปิ้ง,Shopping festival
最少,zuì shǎo,อย่างน้อย / น้อยที่สุด,At least
笔记本,bǐ jì běn,สมุดโน้ต / แล็ปท็อป (โน้ตบุ๊ก),Notebook / Laptop
电池,diàn chí,แบตเตอรี่ / ถ่าน,Battery
劳逸结合,láo yì jié hé,การแบ่งเวลาทำงานและพักผ่อนให้สมดุล,Strike a balance between work and rest
出院,chū yuàn,ออกจากโรงพยาบาล,Discharged from hospital
方法,fāng fǎ,วิธีการ,Method
成功,chéng gōng,ความสำเร็จ / สำเร็จ,Success
分享,fēn xiǎng,แบ่งปัน / แชร์,Share
肯定,kěn dìng,แน่นอน / ยืนยัน,Definitely / Sure
装饰,zhuāng shì,ตกแต่ง / ประดับ,Decorate
摆地摊,bǎi dì tān,ตั้งแผงลอย / ขายของแบกะดิน,Set up a street stall
枪,qiāng,ปืน,Gun
完美,wán měi,สมบูรณ์แบบ,Perfect
每晚,měi wǎn,ทุกคืน,Every night
位置,wèi zhì,"ตำแหน่ง, ที่นั่ง",Location / Position / Seat
抢位置,qiǎng wèi zhì,แย่งที่นั่ง,Fight for a seat / Grab a spot
厌倦,yàn juàn,"เบื่อหน่าย, เอือมระอา",Tired of / Weary
其他,qí tā,อื่นๆ,Other
活动,huó dòng,กิจกรรม,Activity
移民,yí mín,"ผู้อพยพ, ย้ายถิ่นฐาน",Immigrant / Immigrate
俄罗斯后裔,é luó sī hòu yì,เชื้อสายรัสเซีย,Russian descendant
穆斯林,mù sī lín,ชาวมุสลิม,Muslim
长期,cháng qī,ระยะยาว,Long term
睡不着,shuì bu zháo,นอนไม่หลับ,Cannot sleep / Insomnia
消费,xiāo fèi,"การบริโภค, การใช้จ่าย",Consumption / Spending
竞争,jìng zhēng,การแข่งขัน,Competition
讨厌,tǎo yàn,"เกลียด, น่ารำคาญ",Hate / Annoying / Nasty
流行语,liú xíng yǔ,"คำสแลง, คำยอดฮิต",Buzzword / Slang
卷,juǎn,"การแข่งขันที่สูงมาก (สแลง), ม้วน",Involution / Fierce competition / Curl
发音,fā yīn,การออกเสียง,Pronunciation
语法,yǔ fǎ,ไวยากรณ์,Grammar
拒绝,jù jué,ปฏิเสธ,Refuse / Reject
庆祝,qìng zhù,เฉลิมฉลอง,Celebrate
商场,shāng chǎng,ห้างสรรพสินค้า,Shopping mall
一些地方,yī xiē dì fāng,สถานที่บางแห่ง / บางที่,Some places
组织,zǔ zhī,"จัดตั้ง, องค์กร",Organize / Organization
员工,yuán gōng,พนักงาน,Employee / Staff
抽奖,chōu jiǎng,จับฉลาก / ชิงโชค,Lucky draw
拳击俱乐部,quán jī jù lè bù,ชมรมมวย / ค่ายมวย,Boxing club
毕业,bì yè,จบการศึกษา,Graduate / Graduation
新手,xīn shǒu,มือใหม่,Newbie / Beginner
一整天,yī zhěng tiān,"ตลอดทั้งวัน, ทั้งวัน",Whole day / All day
疫情,yì qíng,สถานการณ์โรคระบาด,Epidemic / Pandemic situation
熟悉,shú xī,คุ้นเคย,Familiar
塞车,sāi chē,รถติด,Traffic jam
感冒,gǎn mào,เป็นหวัด,Have a cold / Flu
咳嗽,ké sou,ไอ,Cough
商店,shāng diàn,ร้านค้า,Shop / Store
装饰,zhuāng shì,"ตกแต่ง, การตกแต่ง",Decorate / Decoration
灯笼,dēng long,โคมไฟ,Lantern
大本钟,dà běn zhōng,หอนาฬิกาบิ๊กเบน,Big Ben
澳门,ào mén,มาเก๊า,Macau
塔,tǎ,"เจดีย์, หอคอย",Tower / Pagoda
过年,guò nián,ฉลองปีใหม่ (ตรุษจีน),Celebrate Chinese New Year
喷泉,pēn quán,น้ำพุ,Fountain
经过,jīng guò,ผ่าน (กระบวนการ / สถานที่),Pass by / Go through
路过,lù guò,"ผ่านทาง, แวะผ่าน",Pass by (on the way)
毛,máo,ขน (สัตว์),Fur / Hair / Feather
气味,qì wèi,กลิ่น,Smell / Odor
三文鱼,sān wén yú,ปลาแซลมอน,Salmon
发图片,fā tú piàn,ส่งรูปภาพ,Send a picture
配送费,pèi sòng fèi,"ค่าส่ง, ค่าจัดส่ง",Delivery fee`; // วางเนื้อหา CSV คำศัพท์ทั้งหมด

const sentenceCSV = `留胡须等于不理胡须，让他很长。,"Liú húxū děngyú bù lǐ húxū, ràng tā hěn cháng.",ไว้หนวดคือไม่ตัดหนวดและปล่อยให้มันยาว,Growing a beard means not trimming it and letting it grow long.,,
我有一个计划。,Wǒ yǒu yīgè jìhuà.,ฉันมีแผน,I have a plan.,,
如果我的体重下降，我就留长发。,"Rúguǒ wǒ de tǐzhòng xiàjiàng, wǒ jiù liú chángfà.",ถ้าน้ำหนักฉันลด ฉันจะไว้ผมยาว,"If I lose weight, I will grow my hair long.",,
我的体重是一百零五公斤。,Wǒ de tǐzhòng shì yībǎi líng wǔ gōngjīn.,น้ำหนักของฉันคือ 105 กิโลกรัม,My weight is 105 kilograms.,,
我要减肥。,Wǒ yào jiǎnféi.,ฉันอยากลดน้ำหนัก,I want to lose weight.,,
我每星期去健身房两次。,Wǒ měi xīngqī qù jiànshēnfáng liǎng cì.,ฉันไปยิมสัปดาห์ละสองครั้ง,I go to the gym twice a week.,,
两个房子的电费加起来4000泰铢。,Liǎng gè fángzi de diànfèi jiā qǐlái sìqiān tàizhū.,"ค่าไฟฟ้าของบ้านสองหลังรวมกัน 4,000 บาท",The electricity bills for both houses add up to 4000 baht.,,
我打开面包机的门时，很多蒸汽冒出来。,"Wǒ dǎkāi miànbāo jī de mén shí, hěnduō zhēngqì mào chūlái.",เมื่อฉันเปิดเครื่องทำขนมปัง ไอน้ำพุ่งออกมาเยอะมาก,"When I opened the bread machine, a lot of steam came out.",,
我有另一个房子，我不住在这里。,"Wǒ yǒu lìng yīgè fángzi, wǒ bù zhù zài zhèlǐ.",ฉันมีบ้านอีกหลัง ฉันไม่ได้อยู่ที่นี่,I have another house; I don't live here.,,
我家里有跑步机，我早上在家跑步。,"Wǒ jiālǐ yǒu pǎobù jī, wǒ zǎoshang zàijiā pǎobù.",ที่บ้านฉันมีลู่วิ่ง ฉันวิ่งตอนเช้าที่บ้าน,"I have a treadmill at home, and I run in the morning.",,
外面非常热，比如昨天早上8点时候36度。,"Wàimiàn fēichāng rè, bǐrú zuótiān zǎoshang bā diǎn shíhòu sānshíliù dù.",ข้างนอกร้อนมาก เช่น เมื่อวานตอน 8 โมงเช้า อุณหภูมิ 36 องศา,"It's very hot outside, like yesterday at 8 AM when it was 36 degrees.",,
这里曾经是咖啡店。,Zhèlǐ céngjīng shì kāfēi diàn.,ที่นี่เคยเป็นร้านกาแฟ,This place used to be a coffee shop.,,
这个房子以前是咖啡店。,Zhège fángzi yǐqián shì kāfēi diàn.,บ้านหลังนี้เคยเป็นร้านกาแฟ,This house used to be a coffee shop.,,
你很会做吃的。,Nǐ hěn huì zuò chī de.,คุณทำอาหารเก่งมาก,You are very good at cooking.,,
我打篮球很厉害。,Wǒ dǎ lánqiú hěn lìhài.,ฉันเล่นบาสเกตบอลเก่งมาก,I am very good at basketball.,,
你一般在哪里游泳,nǐ yībān zài nǎlǐ yóuyǒng,ปกติคุณว่ายน้ำที่ไหน,where do you usually swim,,
好久不见,hǎojiǔbujiàn,ไม่เจอกันนานเลย,haven't seen you for a long time,,
咖啡比茶好喝,kāfēi bǐchá hǎohē,กาแฟมีรสชาติดีกว่าชา,Coffee tastes better than tea,,
冷比热好,lěng bǐrè hǎo,หนาวย่อมดีกว่าร้อน,Cold is better than hot,,
汉语比泰语难,hànyǔ bǐ tàiyǔ nán,ภาษาจีนยากกว่าไทย,Chinese is more difficult than Thai,,
你每天都吃甜点吗？,nǐ měitiān dū chī tiándiǎn ma ？,คุณกินของหวานทุกวันหรือไม่?,Do you eat dessert every day?,,
你家附近有公园吗？,nǐjiā fùjìn yǒu gōngyuán ma ？,มีสวนสาธารณะใกล้บ้านคุณไหม?,Is there a park near your home?,,
我家离超市很远,wǒjiā lí chāoshì hěn yuǎn,บ้านของฉันอยู่ไกลจากซุปเปอร์มาร์เก็ต,My home is far from the supermarket,,
你多高？,nǐ duō gāo ？,คุณสูงเท่าไหร่?,How tall are you?,,
你多重？,nǐ duōchóng ？,คุณมีน้ำหนักเท่าไหร่?,How much do you weigh?,,
我收养的流浪猫,wǒ shōuyǎng de liúlàng māo,แมวจรจัดที่ฉันรับเลี้ยงมา,The stray cat I adopted,,
我们在网上认识的 ,wǒmen zài wǎngshàng rènshi de  ,เราพบกันทางอินเทอร์เน็ต,We met online,,
你单身吗？,nǐ dānshēn ma ？,คุณโสดไหม?,Are you single?,,
下课之后，你做什么？,xiàkè zhīhòu ， nǐ zuò shénme ？,คุณทำอะไรหลังเลิกเรียน?,What do you do after class?,,
这杯咖啡是我的,zhèbēi kāfēi shì wǒ de,กาแฟแก้วนี้เป็นของฉัน,This cup of coffee is mine,,
睡得很好。,shuìdé hěn hǎo 。,นอนหลับสบาย,Slept well.,,
我试一下,wǒ shìyīxià,ฉันจะลองดู,I'll give it a try,,
从...到...,cóng ... dào ...,จาก...ถึง...,from...to...,,
我说错了,wǒ shuōcuò le,ฉันพูดผิด.,I said it wrong,,
两个月前,liǎnggè yuè qián,สองเดือนที่แล้ว,two months ago,,
压力大的时候，你会做什么,yālì dà de shíhou ， nǐ huì zuò shénme,คุณทำอะไรเมื่อคุณเครียด?,What do you do when you are stressed?,,
我什么也不吃。,wǒ shénme yě bùchī 。,ฉันจะไม่กินอะไรเลย,I won't eat anything.,,
我什么运动也不喜欢。,wǒ shénme yùndòng yě bù xǐhuan 。,ฉันไม่ชอบกีฬาใดๆ,I don't like any sports.,,
我想起来了。,wǒ xiǎng qǐlai le 。,ฉันจำได้,I remembered.,,
今天你那里天气怎么样？,jīntiān nǐ nàli tiānqì zěnmeyàng ？,อากาศที่คุณอยู่วันนี้เป็นอย่างไรบ้าง?,How is the weather where you are today?,,
我今天4点半就起床了。,wǒ jīntiān 4 diǎnbàn jiù qǐchuáng le 。,วันนี้ฉันตื่นนอนเวลา 4.30 น.,I got up at 4:30 today.,,
你第一次骑自行车是什么时候？,nǐ dìyīcì qí zìxíngchē shì shénme shíhou ？,คุณขี่จักรยานครั้งแรกเมื่อไหร่?,When was the first time you rode a bicycle?,,
游泳比跑步好,yóuyǒng bǐ pǎobù hǎo,ว่ายน้ำดีกว่าวิ่ง,Swimming is better than running,,
我一星期学四天西班牙语。,wǒ yīgè xīngqī xué sìtiān xībānyáyǔ 。,ฉันเรียนภาษาสเปนสี่วันต่อสัปดาห์,I study Spanish four days a week.,,
我只睡了4个小时,wǒ zhǐ shuì le 4 gè xiǎoshí,ฉันนอนแค่4ชั่วโมง,I only slept for 4 hours,,
我忙着学习和工作,wǒ máng zhe xuéxí hé gōngzuò,ฉันยุ่งกับการเรียนและทำงาน,I'm busy studying and working,,
我以为你最喜欢榴莲,wǒ yǐwéi nǐ zuì xǐhuan liúlián,ฉันคิดว่าคุณชอบทุเรียนมากที่สุด,I thought you liked durian the most,,
我刚下课。,wǒgāng xiàkè 。,ฉันเพิ่งเรียนจบ,I just finished class.,,
我可以在家自己做咖啡,wǒ kěyǐ zàijiā zìjǐ zuò kāfēi,ฉันสามารถชงกาแฟเองที่บ้านได้,I can make my own coffee at home,,
如果你来广州，你会怎么选择咖啡店？,rúguǒ nǐ lái guǎngzhōu ， nǐ huì zěnme xuǎnzé kāfēidiàn ？,ถ้าคุณมากวางโจว คุณจะเลือกร้านกาแฟอย่างไร เพราะเหตุใด,"If you come to Guangzhou, how would you choose a coffee shop?",,
我西班牙语比中文好。,wǒ xībānyáyǔ bǐ zhōngwén hǎo 。,ภาษาสเปนของฉันดีกว่าภาษาจีนของฉัน,My Spanish is better than my Chinese.,,
我大概一个月吃一次中国菜。,wǒ dàgài yīgèyuè chī yīcì zhōngguó cài 。,ฉันกินอาหารจีนอาจจะเดือนละครั้ง,I eat Chinese food maybe once a month.,,
从你家到动物园多远？,cóng nǐjiā dào dòngwùyuán duōyuǎn ？,จากบ้านของคุณไปสวนสัตว์ไกลแค่ไหน?,How far is it from your home to the zoo?,,
你看起来很困,nǐ kànqǐlai hěnkùn,คุณดูง่วงนอน,you look sleepy,,
在泰国，15度就很冷了,zài tàiguó ， yīwǔ dù jiù hěn lěng le,ที่ไทย 15 องศาก็ถือว่าหนาวมากแล้ว,"In Thailand, 15 degrees is very cold",,
我问我阿姨借了点钱,wǒ wèn wǒ āyí jiè le diǎn qián,ฉันขอยืมเงินจากป้าของฉันมาเล็กน้อย,I borrowed a little money from my aunt.,,
我们下午去踢足球吧？,wǒmen xiàwǔ qù tīzúqiú bā ？,เราไปเล่นฟุตบอลตอนบ่ายกันไหม?,Shall we go play football in the afternoon?,,
我拍教泰语视频上传到网上。,wǒ pāijiào tàiyǔ shìpín shàng chuándào wǎngshàng 。,ฉันจัดทำวิดีโอสอนภาษาไทยและอัปโหลดทางออนไลน์,I made videos teaching Thai and uploaded them online.,,
除了italki，你还有别的工作吗？,chúle italki ， nǐ háiyǒu biéde gōngzuò ma ？,นอกจาก italki แล้วคุณมีงานอื่นอีกไหม?,"Besides italki, do you have other jobs?",,
生意怎么样？,shēngyi zěnmeyàng ？,ธุรกิจเป็นยังไงบ้าง?,How is business?,,
我以前喜欢，现在不喜欢了,wǒ yǐqián xǐhuan ， xiànzài bù xǐhuan le,ฉันเคยชอบ แต่ตอนนี้ไม่ชอบแล้ว,I used to like it but now I don't,,
你每天都4点半起床吗,nǐ měitiān dū 4 diǎnbàn qǐchuáng ma,คุณตื่นนอนเวลา 4.30 ทุกวันหรือไม่?,Do you get up at 4:30 every day?,,
我感觉我吃得太多了。,wǒ gǎnjué wǒ chī dé tài duō le 。,ฉันรู้สึกว่าฉันกินมากเกินไป,I feel like I've eaten too much.,,
你家附近有市场吗？,nǐjiā fùjìn yǒu shìchǎng ma ？,มีตลาดใกล้บ้านคุณไหม?,Is there a market near your home?,,
草莓比苹果贵,cǎoméi bǐ píngguǒ guì,สตรอเบอร์รี่มีราคาแพงกว่าแอปเปิ้ล,Strawberries are more expensive than apples,,
你儿子很像你。,nǐ érzi hěn xiàng nǐ 。,ลูกชายของคุณเป็นเหมือนคุณมาก,Your son is a lot like you.,,
我希望我可以看懂西游记,wǒ xīwàng wǒ kěyǐ kàn dǒng xīyóujì,ฉันหวังว่าฉันจะเข้าใจการเดินทางสู่ตะวันตก,I hope I can understand Journey to the West,,
泰国天气没有广州那么冷,tàiguó tiānqì méiyǒu guǎngzhōu nàme lěng,อากาศเมืองไทยไม่หนาวเท่ากวางโจว,The weather in Thailand is not as cold as Guangzhou,,
在广州，你曾经感觉到地震吗？,zài guǎngzhōu ， nǐ céngjīng gǎnjué dào dìzhèn ma ？,คุณเคยรู้สึกถึงแผ่นดินไหวในกวางโจวหรือไม่?,Have you ever felt an earthquake in Guangzhou?,,
以我现在的情况，我不可以去日本,yǐ wǒ xiànzài de qíngkuàng ， wǒ bù kěyǐ qù rìběn,ในสถานการณ์ปัจจุบันของฉัน ฉันจะไม่ไปญี่ปุ่น,"In my current situation, I can't go to Japan",,
你烤箱哪里来的？,nǐ kǎoxiāng nǎlǐ lái de ？,เตาอบของคุณมาจากไหน?,Where did your oven come from?,,
我在曼谷买的。,wǒ zài màngǔ mǎi de 。,ฉันซื้อมันในกรุงเทพ,I bought it in Bangkok.,,
我很久没有用空调了，昨天我开始用空调,wǒ hěnjiǔméi yǒuyòng kōngtiáo le ， zuótiān wǒ kāishǐ yòng kōngtiáo,ไม่ได้ใช้แอร์มานานแล้ว ฉันเริ่มใช้มันเมื่อวานนี้,I haven't used the air conditioner for a long time. I started using it yesterday,,
你怎么感觉没有精神一样,Nǐ zěnme gǎnjué méiyǒu jīngshén yīyàng,ทำไมคุณดูเหมือนไม่มีแรงเลย / คุณดูไม่มีชีวิตชีวาเลย,Why do you seem to have no energy? / You seem listless.,,
请你吃饭,Qǐng nǐ chīfàn,เลี้ยงข้าวคุณ / ชวนคุณไปกินข้าว,Treat you to a meal / Invite you to eat,,
他帮我付了酒店的钱,Tā bāng wǒ fù le jiǔdiàn de qián,เขาช่วยฉันจ่ายค่าโรงแรม,He helped me pay for the hotel.,,
我带他到外面逛街,Wǒ dài tā dào wàimiàn guàngjiē,ฉันพาเขาไปเดินเล่นข้างนอก (ช้อปปิ้ง),I took him window shopping outside / I took him strolling outside.,,
你们在一起多久了？,Nǐmen zài yīqǐ duōjiǔ le?,พวกคุณคบกันมานานเท่าไหร่แล้ว?,How long have you been together?,,
我和我女朋友都觉得结婚不重要,Wǒ hé wǒ nǚpéngyǒu dōu juéde jiéhūn bù zhòngyào,ฉันกับแฟนสาวของฉันทั้งคู่คิดว่าการแต่งงานไม่สำคัญ,My girlfriend and I both think marriage is not important.,,
泰国也是这样,Tàiguó yě shì zhèyàng,ประเทศไทยก็เป็นแบบนี้เช่นกัน,Thailand is also like this.,,
今年我没买,Jīnnián wǒ méi mǎi,ปีนี้ฉันไม่ได้ซื้อ,This year I didn't buy (anything).,,
我见很多人,Wǒ jiàn hěn duō rén,ฉันพบคนมากมาย,I meet many people.,,
你经常去见你学生吗？,Nǐ jīngcháng qù jiàn nǐ xuéshēng ma?,คุณไปพบนักเรียนของคุณบ่อยไหม?,Do you often go to see your students?,,
我刚从洗手间回来,Wǒ gāng cóng xǐshǒujiān huílái,ฉันเพิ่งกลับมาจากห้องน้ำ,I just came back from the restroom.,,
只要一小时,zhǐyào yī xiǎoshí,ใช้เวลาเพียงหนึ่งชั่วโมงเท่านั้น,(It) only takes one hour.,,
我从5点到9点一直在做作业,Wǒ cóng wǔ diǎn dào jiǔ diǎn yīzhí zài zuò zuòyè.,ฉันทำการบ้านมาตลอดตั้งแต่ 5 โมงถึง 3 ทุ่ม,I have been doing homework continuously from 5 o'clock to 9 o'clock.,,
今天没有昨天那么热,Jīntiān méiyǒu zuótiān nàme rè.,วันนี้ไม่ร้อนเท่าเมื่อวาน,Today is not as hot as yesterday.,,
我之前差点被蛇咬了,Wǒ zhīqián chàdiǎn bèi shé yǎo le.,ก่อนหน้านี้ฉันเกือบถูกงูกัด,I was almost bitten by a snake before.,,
你有没有被你家的猫咬过？,Nǐ yǒuméiyǒu bèi nǐ jiā de māo yǎo guo?,คุณเคยถูกแมวที่บ้านกัดไหม?,Have you ever been bitten by your cat (at home)?,,
你应该试一下,nǐ yīnggāi shì yīxià,คุณควรลองดูนะ,You should try it.,,
我特别喜欢西瓜,wǒ tèbié xǐhuān xīguā,ฉันชอบแตงโมเป็นพิเศษ,I especially like watermelon.,,
我做的第一件事情,wǒ zuò de dì yī jiàn shìqing,สิ่งแรกที่ฉันทำ,the first thing I do/did,,
我们9点才到家。,Wǒmen jiǔ diǎn cái dàojiā.,พวกเราถึงบ้านตอน 3 ทุ่ม,We didn't get home until 9 o'clock.,,
在路上下雨了。,Zài lùshang xià yǔ le.,ระหว่างทางฝนตก,It rained on the way.,,
你怎么像没有精神一样？,Nǐ zěnme xiàng méiyǒu jīngshén yīyàng?,ทำไมคุณดูเหมือนไม่มีแรงเลย?,Why do you seem to have no energy?,,
时间像流水一样。,Shíjiān xiàng liúshuǐ yīyàng.,เวลาเหมือนสายน้ำ,Time flows like water.,,
今天的月亮像圆盘一样圆。,Jīntiān de yuèliang xiàng yuánpán yīyàng yuán.,พระจันทร์วันนี้กลมเหมือนจาน,Today's moon is as round as a disc.,,
有些人长期住这里，有些人只住几天，在这边旅游。,"Yǒuxiē rén chángqī zhù zhèlǐ, yǒuxiē rén zhǐ zhù jǐ tiān, zài zhèbiān lǚyóu.",บางคนอยู่ที่นี่ระยะยาว บางคนอยู่แค่ไม่กี่วันเพื่อเที่ยวที่นี่,"Some people live here long-term, some only stay for a few days to travel here.",,
听说，三个月要换一次牙刷。,"Tīngshuō, sān ge yuè yào huàn yīcì yáshuā.",ได้ยินมาว่าต้องเปลี่ยนแปรงสีฟันทุกสามเดือน,I've heard you should change your toothbrush once every three months.,,
你还戴手表吗？,Nǐ hái dài shǒubiǎo ma?,คุณยังใส่นาฬิกาข้อมืออยู่ไหม?,Do you still wear a watch?,,
我什么也没买。,Wǒ shénme yě méi mǎi.,ฉันไม่ได้ซื้ออะไรเลย,I didn't buy anything.,,
还有一个多月就是我生日。,Hái yǒu yī ge duō yuè jiùshì wǒ shēngrì.,อีกเดือนกว่าๆ ก็จะถึงวันเกิดฉันแล้ว,My birthday is in a little over a month.,,
没有特别的事情发生。,Méiyǒu tèbié de shìqing fāshēng.,ไม่มีเรื่องพิเศษอะไรเกิดขึ้น,Nothing special happened.,,
你有没有想过搬到泰国的南部？,Nǐ yǒuméiyǒu xiǎngguò bāndào Tàiguó de nánbù?,คุณเคยคิดที่จะย้ายไปอยู่ภาคใต้ของประเทศไทยไหม?,Have you ever thought about moving to southern Thailand?,,
我看了这本书的一半。,Wǒ kàn le zhè běn shū de yībàn.,ฉันอ่านหนังสือเล่มนี้ไปแล้วครึ่งหนึ่ง,I have read half of this book.,,
你几点睡的？,Nǐ jǐ diǎn shuì de?,คุณนอนกี่โมง?,What time did you go to sleep?,,
我住村里。,Wǒ zhù cūnlǐ.,ฉันอาศัยอยู่ในหมู่บ้าน,I live in the village.,,
他们一天只吃两餐。,Tāmen yītiān zhǐ chī liǎng cān.,พวกเขาทานอาหารเพียงสองมื้อต่อวัน,They only eat two meals a day.,,
我旁边种了很多水稻。,Wǒ pángbiān zhòng le hěn duō shuǐdào.,ข้างๆ ที่ของฉันมีการปลูกข้าวเยอะมาก,A lot of rice paddies are planted next to my place.,,
够两三个人吃。,Gòu liǎng sān ge rén chī.,เพียงพอสำหรับสองสามคนทาน,(It's) enough for two or three people to eat.,,
他快60岁了。,Tā kuài liùshí suì le.,เขาอายุเกือบ 60 ปีแล้ว,He is almost 60 years old.,,
你很年轻。,Nǐ hěn niánqīng.,คุณยังหนุ่ม/สาวมาก,You are very young.,,
我告诉过你。,Wǒ gàosùguo nǐ.,ฉันเคยบอกคุณแล้ว,I have told you before.,,
7点开门。,qī diǎn kāimén.,เปิด 7 โมง,(It) opens at 7 o'clock.,,
10点关门。,shí diǎn guānmén.,ปิด 4 ทุ่ม,(It) closes at 10 o'clock.,,
这个减肥效果怎么样？,Zhège jiǎnféi xiàoguǒ zěnmeyàng?,การลดน้ำหนักนี้ได้ผลเป็นอย่างไรบ้าง?,How is the effect of this weight-loss method?,,
我只做了两年老板。,Wǒ zhǐ zuòle liǎng nián lǎobǎn.,ฉันเป็นเจ้านายอยู่แค่สองปี,I was a boss for only two years.,,
他很晚才开始学医。,Tā hěn wǎn cái kāishǐ xuéyī.,เขาเริ่มเรียนแพทย์ตอนอายุมากแล้ว,He started studying medicine very late.,,
他21岁才上大学，我19岁就上大学了。,"Tā èrshíyī suì cái shàng dàxué, wǒ shíjiǔ suì jiù shàng dàxué le.",เขาเข้ามหาวิทยาลัยตอนอายุ 21 แต่ฉันเข้าตอนอายุ 19,"He didn't go to university until he was 21, while I went when I was 19.",,
只有好好学习才能赚很多钱。,Zhǐyǒu hǎohǎo xuéxí cáinéng zhuàn hěn duō qián.,ต้องตั้งใจเรียนเท่านั้นถึงจะหาเงินได้เยอะๆ,Only by studying hard can you earn a lot of money.,,
这个电影关于外卖员(骑手)。,Zhège diànyǐng guānyú wàimàiyuán (qíshǒu).,หนังเรื่องนี้เกี่ยวกับพนักงานส่งอาหาร (ไรเดอร์),This movie is about a food delivery driver (rider).,,
我把摄像头关掉。,Wǒ bǎ shèxiàngtóu guāndiào.,ฉันจะปิดกล้อง,I'll turn off the camera.,,
把窗户关一下。,Bǎ chuānghu guān yīxià.,ช่วยปิดหน้าต่างหน่อย,Please close the window.,,
听得到吗？,Tīngdedào ma?,ได้ยินไหมครับ/คะ?,Can you hear me?,,
明天放假1天。,Míngtiān fàngjià yī tiān.,พรุ่งนี้หยุด 1 วัน,Tomorrow is a one-day holiday.,,
现在我们停车休息。,Xiànzài wǒmen tíngchē xiūxi.,ตอนนี้เราจอดรถพัก,We are stopping the car to rest now.,,
我又忘了。,Wǒ yòu wàng le.,ฉันลืมอีกแล้ว,I forgot again.,,
早就喝完了。,Zǎo jiù hē wán le.,ดื่มหมดไปนานแล้ว,(I) finished drinking it long ago.,,
你已经吃了早餐吗？,Nǐ yǐjīng chīle zǎocān ma?,คุณทานอาหารเช้าแล้วหรือยัง?,Have you eaten breakfast yet?,,
今天我六点就起床了。,Jīntiān wǒ liù diǎn jiù qǐchuáng le.,วันนี้ฉันตื่นตั้งแต่ 6 โมงเช้า,I got up at 6 o'clock today (implying this is early).,,
夏天洗冷水澡。,Xiàtiān xǐ lěngshuǐ zǎo.,หน้าร้อนอาบน้ำเย็น,(I) take cold showers in the summer.,,
我还没拿到检查结果。,Wǒ hái méi nádào jiǎnchá jiéguǒ.,ฉันยังไม่ได้รับผลตรวจ,I haven't received the check-up results yet.,,
加入这个项目。,Jiārù zhège xiàngmù.,เข้าร่วมโครงการนี้,Join this project.,,
你醒来之后会马上起床吗？,Nǐ xǐnglái zhīhòu huì mǎshàng qǐchuáng ma?,หลังจากคุณตื่นแล้ว คุณลุกจากเตียงทันทีเลยไหม?,Do you get up immediately after you wake up?,,
我刚睡觉醒来。,Wǒ gāng shuìjiào xǐnglái.,ฉันเพิ่งตื่นนอน,I just woke up from sleep.,,
我想起来了。,Wǒ xiǎng qǐlái le.,ฉันนึกออกแล้ว,I remember now.,,
你决定吧。,Nǐ juédìng ba.,คุณตัดสินใจเถอะ,You decide.,,
你敢不敢玩蹦极？,Nǐ gǎnbugǎn wán bèngjí?,คุณกล้าเล่นบันจี้จัมพ์ไหม?,Do you dare to go bungee jumping?,,
我一点也不累。,Wǒ yīdiǎn yě bù lèi.,ฉันไม่เหนื่อยเลยแม้แต่น้อย,I'm not tired at all.,,
昨天我一节课也没上。,Zuótiān wǒ yī jié kè yě méi shàng.,เมื่อวานฉันไม่ได้เข้าเรียนเลยแม้แต่คาบเดียว,I didn't attend a single class yesterday.,,
天上有很多乌云。,Tiānshang yǒu hěn duō wūyún.,บนท้องฟ้ามีเมฆดำมากมาย,There are many dark clouds in the sky.,,
突然我看到200米远有一个理发店。,Túrán wǒ kàndào liǎngbǎi mǐ yuǎn yǒu yī ge lǐfàdiàn.,ทันใดนั้นฉันก็เห็นร้านตัดผมอยู่ห่างออกไป 200 เมตร,Suddenly I saw a barbershop 200 meters away.,,
用1个月我就减了3公斤。,Yòng yī ge yuè wǒ jiù jiǎnle sān gōngjīn.,ฉันใช้เวลา 1 เดือนก็ลดน้ำหนักไป 3 กิโลกรัม,I lost 3 kilograms in just one month.,,
每天在跑步机上走路。,Měitiān zài pǎobùjī shàng zǒulù.,เดินบนลู่วิ่งทุกวัน,(I) walk on the treadmill every day.,,
他16岁就去少林寺了。,Tā shíliù suì jiù qù Shàolínsì le.,เขาไปวัดเส้าหลินตั้งแต่อายุ 16 ปี,He went to the Shaolin Temple when he was just 16.,,
你试一下。,Nǐ shì yīxià.,คุณลองดูสิ,You try it.,,
学泰语的多不多？,Xué Tàiyǔ de duō bù duō?,คนเรียนภาษาไทยเยอะไหม?,Are there many people learning Thai?,,
还好网络不错。,Hái hǎo wǎngluò bùcuò.,โชคดีที่อินเทอร์เน็ตก็ใช้ได้ดี,"Luckily, the internet is pretty good.",,
8月停电比较多。,Bā yuè tíngdiàn bǐjiào duō.,เดือนสิงหาคมไฟดับค่อนข้างบ่อย,Power outages are more frequent in August.,,
有很多运动员来自非洲。,Yǒu hěn duō yùndòngyuán láizì Fēizhōu.,มีนักกีฬาหลายคนที่มาจากแอฟริกา,Many athletes come from Africa.,,
我觉得我最多可以上8节课。,Wǒ juéde wǒ zuìduō kěyǐ shàng bā jié kè.,ฉันคิดว่าฉันเรียนได้อย่างมากที่สุด 8 คาบ,I think I can take 8 classes at most.,,
你本来今天想看什么电影？,Nǐ běnlái jīntiān xiǎng kàn shénme diànyǐng?,เดิมทีวันนี้คุณอยากดูหนังเรื่องอะไร?,What movie did you originally want to watch today?,,
我看看图片。,Wǒ kànkàn túpiàn.,ขอดูรูปหน่อย,Let me see the picture.,,
它很小的时候，我就开始养它。,"Tā hěn xiǎo de shíhou, wǒ jiù kāishǐ yǎng tā.",ฉันเริ่มเลี้ยงมันตั้งแต่ตอนที่มันยังเล็กมาก,I started raising it when it was very small.,,
你应该好好学中文。,Nǐ yīnggāi hǎohǎo xué Zhōngwén.,คุณควรจะตั้งใจเรียนภาษาจีน,You should study Chinese well.,,
我把冰箱从另一个房子搬到了现在这个房子。,Wǒ bǎ bīngxiāng cóng lìng yī ge fángzi bāndào le xiànzài zhège fángzi.,ฉันย้ายตู้เย็นจากบ้านอีกหลังมาบ้านหลังปัจจุบันนี้,I moved the refrigerator from the other house to this current house.,,
我被我的猫咬了一下。,Wǒ bèi wǒ de māo yǎo le yīxià.,ฉันถูกแมวของฉันกัด,I was bitten by my cat.,,
这个手机我送给你。,Zhège shǒujī wǒ sònggěi nǐ.,มือถือเครื่องนี้ฉันให้คุณ,"This phone, I give to you.",,
之前我和我朋友计划开一家咖啡店，我们买了冰箱，放在了他家。,"Zhīqián wǒ hé wǒ péngyou jìhuà kāi yī jiā kāfēidiàn, wǒmen mǎile bīngxiāng, fàng zài le tā jiā.",ก่อนหน้านี้ฉันกับเพื่อนวางแผนจะเปิดร้านกาแฟ เราซื้อตู้เย็นแล้วเอาไปไว้ที่บ้านเขา,"Before, my friend and I planned to open a coffee shop; we bought a refrigerator and put it at his house.",,
我什么也没买。,Wǒ shénme yě méi mǎi.,ฉันไม่ได้ซื้ออะไรเลย,I didn't buy anything.,,
我刚醒来。,Wǒ gāng xǐnglái.,ฉันเพิ่งตื่น,I just woke up.,,
你可以写一下吗？,Nǐ kěyǐ xiě yīxià ma?,คุณช่วยเขียนให้หน่อยได้ไหม?,Can you write it down?,,
你可以再说一遍吗？,Nǐ kěyǐ zài shuō yībiàn ma?,คุณพูดอีกครั้งได้ไหม?,Can you say it again?,,
可能是因为他们是游客。,Kěnéng shì yīnwèi tāmen shì yóukè.,อาจจะเป็นเพราะว่าพวกเขาเป็นนักท่องเที่ยว,It's probably because they are tourists.,,
我们下课吧。,Wǒmen xiàkè ba.,เราเลิกเรียนกันเถอะ,Let's finish the class.,,
我做了手术。,Wǒ zuòle shǒushù.,ฉันผ่าตัดแล้ว,I had surgery.,,
网络断了。,Wǎngluò duànle.,เน็ตหลุด / เน็ตตัด,The internet is disconnected.,,
她打电话给我。,Tā dǎ diànhuà gěi wǒ.,เธอโทรหาฉัน,She called me.,,
说到...,shuō dào...,"พูดถึง..., กล่าวถึง...",Speaking of...,,
无论在哪里,wú lùn zài nǎ lǐ,ไม่ว่าจะอยู่ที่ไหน,No matter where,,
太吵了,tài chǎo le,เสียงดังเกินไป,Too noisy,,
中国很卷,zhōng guó hěn juǎn,ประเทศจีนการแข่งขันสูงมาก,China is very competitive (involution),,
祝你好运,zhù nǐ hǎo yùn,ขอให้คุณโชคดี,Good luck,,
泰国人过圣诞节吗,tài guó rén guò shèng dàn jié ma,คนไทยฉลองวันคริสต์มาสไหม,Do Thais celebrate Christmas?,,
我没有在公司上过班,wǒ méi yǒu zài gōng sī shàng guò bān,ฉันไม่เคยทำงานในบริษัทมาก่อน,I have never worked in a company,,
发生了意外,fā shēng le yì wài,เกิดอุบัติเหตุขึ้น,An accident happened,,
好几个国家,hǎo jǐ gè guó jiā,หลายประเทศ,Quite a few countries,,
混在一起,hùn zài yī qǐ,"ปนกัน, ผสมอยู่ด้วยกัน",Mixed together,`; // วางเนื้อหา CSV ประโยคทั้งหมด

// ================== CSV Parser ==================
function parseCSVLine(line) {
    const result = [];
    let current = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
        const ch = line[i];
        if (ch === '"') {
            if (inQuotes && i + 1 < line.length && line[i + 1] === '"') {
                current += '"';
                i++;
            } else {
                inQuotes = !inQuotes;
            }
        } else if (ch === ',' && !inQuotes) {
            result.push(current.trim());
            current = '';
        } else {
            current += ch;
        }
    }
    result.push(current.trim());
    return result;
}

function parseCSV(text, skipHeader = true) {
    const lines = text.trim().split('\n');
    const start = skipHeader ? 1 : 0;
    return lines.slice(start).map(line => parseCSVLine(line)).filter(r => r.length >= 2 && r[0]);
}

function parseWordsCSV(csv) {
    const lines = csv.trim().split('\n');
    const words = [];
    for (const line of lines) {
        const parts = parseCSVLine(line);
        if (parts.length >= 4 && parts[0] && parts[0].length >= 1 && !parts[0].startsWith('简体字')) {
            words.push({
                chinese: parts[0].trim(),
                pinyin: (parts[1] || '').trim(),
                thai: (parts[2] || '').trim(),
                english: (parts[3] || '').trim(),
                type: 'word'
            });
        }
    }
    return words;
}

function parseSentencesCSV(csv) {
    const lines = csv.trim().split('\n');
    const sentences = [];
    for (const line of lines) {
        const parts = parseCSVLine(line);
        if (parts.length >= 4 && parts[0] && parts[0].length > 2) {
            sentences.push({
                chinese: parts[0].trim().replace(/^"|"$/g, ''),
                pinyin: (parts[1] || '').trim(),
                thai: (parts[2] || '').trim(),
                english: (parts[3] || '').trim(),
                type: 'sentence'
            });
        }
    }
    return sentences;
}

// ================== Data ==================
let allWords = parseWordsCSV(wordCSV);
let allSentences = parseSentencesCSV(sentenceCSV);

// Deduplicate
allWords = allWords.filter((w, i, arr) => arr.findIndex(x => x.chinese === w.chinese) === i);
allSentences = allSentences.filter((s, i, arr) => arr.findIndex(x => x.chinese === s.chinese) === i);
let allItems = [...allWords, ...allSentences];

// ================== State ==================
let currentFilter = 'all';
let currentMode = 'quiz';
let streak = 0, totalCorrect = 0, totalAttempts = 0;
let currentItems = [];
let quizCorrectItem = null;
let matchingPairs = [], matchingSelected = null, matchingMatched = 0;
let scrambleItem = null, scrambleChunks = [], scrambleAnswer = [], scrambleWrongCount = 0;
let listenItem = null;

// ================== Helpers ==================
function getFilteredItems() {
    if (currentFilter === 'vocab') return [...allWords];
    if (currentFilter === 'sentence') return [...allSentences];
    return [...allItems];
}

function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function showToast(msg, type = 'success') {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
}

function updateStats() {
    document.getElementById('stat-streak').textContent = `🔥 ${streak}`;
    document.getElementById('stat-correct').textContent = `✅ ${totalCorrect}`;
    document.getElementById('stat-total').textContent = `📊 ${totalAttempts}`;
    const acc = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;
    document.getElementById('stat-accuracy').textContent = `🎯 ${acc}%`;
    saveStats();
}

function loadStats() {
    try {
        const s = JSON.parse(localStorage.getItem('cnlearn_stats') || '{}');
        streak = s.streak || 0;
        totalCorrect = s.totalCorrect || 0;
        totalAttempts = s.totalAttempts || 0;
    } catch(e) {}
}

function saveStats() {
    try {
        localStorage.setItem('cnlearn_stats', JSON.stringify({ streak, totalCorrect, totalAttempts }));
    } catch(e) {}
}
loadStats();

function recordAnswer(correct) {
    totalAttempts++;
    if (correct) {
        totalCorrect++;
        streak++;
        showToast('✅ ถูกต้อง! +1 streak', 'success');
    } else {
        streak = 0;
        showToast('❌ ผิด! ลองอีกครั้ง', 'error');
    }
    updateStats();
}

function resetAllStats() {
    if (confirm('คุณแน่ใจหรือไม่ว่าต้องการล้างสถิติทั้งหมด?\n(Streak, จำนวนข้อถูก, จำนวนข้อทั้งหมดจะถูกรีเซ็ต)')) {
        streak = 0;
        totalCorrect = 0;
        totalAttempts = 0;
        updateStats();
        showToast('🧹 รีเซ็ตคะแนนเรียบร้อยแล้ว', 'success');
    }
}

// ================== AZURE TTS ==================
// ⚠️ SECURITY WARNING: This API key is exposed to anyone who views page source.
// 1) ROTATE this key in Azure now (the one below should be considered compromised).
// 2) For production, move TTS behind a small server proxy and call YOUR endpoint here.
// 3) Until then, treat this as a development-only setup.
const AZURE_TTS_KEY = '4nIWvCBoSlCZsK5xVyGFUUGd4qxgr9uJXwPIypXhlNWySpGmy3mVJQQJ99CEACqBBLyXJ3w3AAAYACOGyQPa';      // <-- เปลี่ยนเป็น Key จริงของคุณ
const AZURE_TTS_REGION = 'southeastasia';          // <-- เปลี่ยน region ถ้าต้องการ

const AZURE_VOICES = [
    'zh-CN-XiaoxiaoNeural',
    'zh-CN-YunxiNeural',
    'zh-CN-YunjianNeural',
    'zh-CN-XiaoyiNeural',
    'zh-CN-XiaochenNeural',
    'zh-CN-XiaohanNeural',
    'zh-CN-XiaomengNeural',
    'zh-CN-XiaoqiuNeural',
    'zh-CN-XiaoruiNeural',
    'zh-CN-XiaoshuangNeural',
    'zh-CN-XiaoxuanNeural',
    'zh-CN-XiaoyanNeural'
];

function getRandomVoice() {
    return AZURE_VOICES[Math.floor(Math.random() * AZURE_VOICES.length)];
}

async function speakChinese(text) {
    if (!text) return;
    // Try Azure TTS first
    try {
        const tokenRes = await fetch(
            `https://${AZURE_TTS_REGION}.api.cognitive.microsoft.com/sts/v1.0/issuetoken`,
            { method: 'POST', headers: { 'Ocp-Apim-Subscription-Key': AZURE_TTS_KEY } }
        );
        if (!tokenRes.ok) throw new Error('Token error');
        const token = await tokenRes.text();

        const voice = getRandomVoice();
        const ssml = `<speak version='1.0' xml:lang='zh-CN'>
  <voice name='${voice}'>
    <prosody rate='0.85'>${text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}</prosody>
  </voice>
</speak>`;

        const audioRes = await fetch(
            `https://${AZURE_TTS_REGION}.tts.speech.microsoft.com/cognitiveservices/v1`,
            {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/ssml+xml',
                    'X-Microsoft-OutputFormat': 'audio-16khz-32kbitrate-mono-mp3',
                    'User-Agent': 'ChineseLearnApp'
                },
                body: ssml
            }
        );
        if (!audioRes.ok) throw new Error('TTS request failed');
        const blob = await audioRes.blob();
        const url = URL.createObjectURL(blob);
        const audio = new Audio(url);
        audio.onended = () => URL.revokeObjectURL(url);
        await audio.play();
    } catch (err) {
        // Fallback to browser TTS
        console.warn('Azure TTS failed, using browser TTS', err);
        if (typeof window.speechSynthesis !== 'undefined') {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'zh-CN';
            utterance.rate = 0.85;
            window.speechSynthesis.cancel();
            window.speechSynthesis.speak(utterance);
        }
    }
}

// ================== Render Functions ==================
function renderQuiz() {
    currentItems = getFilteredItems();
    if (currentItems.length < 4) {
        document.getElementById('game-area').innerHTML = '<div class="empty-state"><div class="seal">少</div>ต้องการอย่างน้อย 4 รายการ</div>';
        return;
    }
    const pool = shuffle(currentItems);
    quizCorrectItem = pool[0];
    let options = [quizCorrectItem, pool[1], pool[2], pool[3]];
    // Deduplicate
    const seen = new Set();
    options = options.filter(o => {
        const k = o.chinese;
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
    });
    while (options.length < 4 && pool.length > options.length) {
        const extra = pool.find(o => !seen.has(o.chinese));
        if (extra) { options.push(extra); seen.add(extra.chinese); }
        else break;
    }
    options = shuffle(options.slice(0, 4));

    const area = document.getElementById('game-area');
    const isLong = quizCorrectItem.chinese.length > 4;
    area.innerHTML = `
        <div class="quiz-character-wrap${isLong ? ' long' : ''}">
            <div class="quiz-character${isLong ? ' long' : ''}">${quizCorrectItem.chinese}</div>
        </div>
        <div class="pinyin-display hidden" id="pinyin-display">${quizCorrectItem.pinyin || ''}</div>
        <div class="quiz-controls">
            <button class="btn btn-sm" id="toggle-pinyin-btn" onclick="togglePinyin()">แสดงพินอิน</button>
            <button class="audio-btn" onclick="speakChinese('${quizCorrectItem.chinese.replace(/'/g,"\\'")}')" title="ฟังเสียง">🔊</button>
        </div>
        <div class="quiz-options" id="quiz-options">
            ${options.map((o,i) => `
                <button class="quiz-option" data-correct="${o.chinese === quizCorrectItem.chinese}"
                    onclick="answerQuiz(this)">
                    ${o.thai}
                    <small>${o.english}</small>
                </button>
            `).join('')}
        </div>
        <div id="quiz-feedback" class="feedback"></div>
    `;
    document.getElementById('nav-area').innerHTML = `<button class="btn" onclick="renderQuiz()">🔄 ข้อต่อไป</button>`;
}

function togglePinyin() {
    const el = document.getElementById('pinyin-display');
    const btn = document.getElementById('toggle-pinyin-btn');
    if (el.classList.contains('hidden')) {
        el.classList.remove('hidden');
        btn.textContent = 'ซ่อนพินอิน';
    } else {
        el.classList.add('hidden');
        btn.textContent = 'แสดงพินอิน';
    }
}

function answerQuiz(btn) {
    const allBtns = document.querySelectorAll('#quiz-options .quiz-option');
    if (btn.dataset.answered === 'true') return;
    allBtns.forEach(b => b.dataset.answered = 'true');
    const isCorrect = btn.dataset.correct === 'true';
    allBtns.forEach(b => {
        if (b.dataset.correct === 'true') b.classList.add('correct');
        if (b === btn && !isCorrect) b.classList.add('wrong');
        b.style.pointerEvents = 'none';
    });
    const fb = document.getElementById('quiz-feedback');
    fb.textContent = isCorrect ? '✅ ถูกต้อง!' : '❌ ผิด';
    fb.className = 'feedback ' + (isCorrect ? 'success' : 'error');
    recordAnswer(isCorrect);
}

// ================== Matching ==================
function renderMatching() {
    currentItems = getFilteredItems().filter(i => i.type === 'word');
    if (currentItems.length < 6) {
        document.getElementById('game-area').innerHTML = '<div class="empty-state"><div class="seal">少</div>ต้องการอย่างน้อย 6 คำศัพท์</div>';
        return;
    }
    const pool = shuffle(currentItems).slice(0, 8);
    matchingPairs = pool;
    matchingSelected = null;
    matchingMatched = 0;
    const cards = [];
    pool.forEach((item, i) => {
        cards.push({ id: i, text: item.chinese, pairId: i, side: 'chinese', item });
        cards.push({ id: i+100, text: item.thai + ' / ' + item.english, pairId: i, side: 'meaning', item });
    });
    const shuffledCards = shuffle(cards);
    document.getElementById('game-area').innerHTML = `
        <div class="matching-grid" id="matching-grid">
            ${shuffledCards.map(c => `
                <div class="match-card ${c.side==='meaning' ? 'meaning' : ''}" 
                     data-pair="${c.pairId}" data-side="${c.side}" onclick="selectMatch(this)">
                    ${c.text}
                </div>
            `).join('')}
        </div>
        <p class="text-center mt-1">จับคู่คำศัพท์กับคำแปล</p>
    `;
    document.getElementById('nav-area').innerHTML = `
        <button class="btn" onclick="renderMatching()">🔄 เริ่มใหม่</button>
        <span id="match-status">จับได้: ${matchingMatched}/${pool.length}</span>
    `;
}

function selectMatch(card) {
    if (card.classList.contains('matched')) return;
    if (card.dataset.side === 'chinese') {
        speakChinese(card.textContent.trim());
    }
    if (!matchingSelected) {
        card.classList.add('selected');
        matchingSelected = card;
    } else if (matchingSelected === card) {
        card.classList.remove('selected');
        matchingSelected = null;
    } else {
        const p1 = matchingSelected.dataset.pair, p2 = card.dataset.pair;
        const s1 = matchingSelected.dataset.side, s2 = card.dataset.side;
        if (p1 === p2 && s1 !== s2) {
            matchingSelected.classList.add('matched');
            card.classList.add('matched');
            matchingSelected.classList.remove('selected');
            matchingMatched++;
            recordAnswer(true);
            document.getElementById('match-status').textContent = `จับได้: ${matchingMatched}/${matchingPairs.length}`;
            if (matchingMatched === matchingPairs.length) {
                showToast('🎉 ยินดีด้วย! จับคู่ครบทุกคู่แล้ว!', 'success');
                setTimeout(renderMatching, 1500);
            }
        } else {
            matchingSelected.classList.add('wrong');
            card.classList.add('wrong');
            setTimeout(() => {
                matchingSelected.classList.remove('wrong', 'selected');
                card.classList.remove('wrong');
            }, 500);
            recordAnswer(false);
        }
        matchingSelected = null;
    }
}

// ================== Scramble ==================
function renderScramble() {
    currentItems = getFilteredItems().filter(i => i.type === 'sentence');
    if (currentItems.length < 2) {
        document.getElementById('game-area').innerHTML = '<div class="empty-state"><div class="seal">少</div>ต้องการอย่างน้อย 2 ประโยค</div>';
        return;
    }
    scrambleItem = currentItems[Math.floor(Math.random() * currentItems.length)];
    // Split into chunks: if length <= 15, split by character; else group every 3 chars + punctuation
    let chunks = [];
    if (scrambleItem.chinese.length <= 15) {
        chunks = scrambleItem.chinese.split('');
    } else {
        const parts = scrambleItem.chinese.split(/([，。！？、,\.!\?])/).filter(Boolean);
        for (const part of parts) {
            if (/^[，。！？、,\.!\?]$/.test(part)) {
                chunks.push(part);
            } else {
                for (let i = 0; i < part.length; i += 3) {
                    chunks.push(part.substring(i, i+3));
                }
            }
        }
    }
    scrambleChunks = shuffle(chunks.filter(c => c.trim()));
    scrambleAnswer = [];
    scrambleWrongCount = 0;
    document.getElementById('game-area').innerHTML = `
        <p class="scramble-prompt">เรียงคำให้เป็นประโยคที่ถูกต้อง</p>
        <div class="scramble-answer" id="scramble-answer"></div>
        <div class="scramble-words" id="scramble-words">
            ${scrambleChunks.map((c,i) => `<span class="scramble-chunk" data-idx="${i}" onclick="placeChunk(${i})">${c}</span>`).join('')}
        </div>
        <div style="display:flex;gap:8px;justify-content:center;margin:10px 0 4px;">
            <button class="btn btn-sm" onclick="undoChunk()">↩ ถอยหลัง</button>
            <button class="btn btn-sm btn-success" onclick="checkScramble()">✅ ตรวจสอบ</button>
            <button class="btn btn-sm" onclick="renderScramble()">🔄 ใหม่</button>
        </div>
        <div id="scramble-feedback" class="feedback"></div>
        <div id="scramble-audio" class="hidden text-center">
            <button class="audio-btn" onclick="speakChinese('${scrambleItem.chinese.replace(/'/g,"\\'")}')">🔊</button>
        </div>
    `;
    document.getElementById('nav-area').innerHTML = '';
}

function placeChunk(idx) {
    const chunkEls = document.querySelectorAll('#scramble-words .scramble-chunk');
    if (idx >= chunkEls.length) return;
    const el = chunkEls[idx];
    if (el.classList.contains('placed')) return;
    el.classList.add('placed');
    scrambleAnswer.push({ text: el.textContent, idx });
    updateScrambleDisplay();
}

function undoChunk() {
    if (scrambleAnswer.length === 0) return;
    const last = scrambleAnswer.pop();
    const el = document.querySelectorAll('#scramble-words .scramble-chunk')[last.idx];
    if (el) el.classList.remove('placed');
    updateScrambleDisplay();
}

function updateScrambleDisplay() {
    const ansDiv = document.getElementById('scramble-answer');
    if (!ansDiv) return;
    if (scrambleAnswer.length === 0) {
        ansDiv.innerHTML = '<span class="empty-hint">วางคำที่นี่...</span>';
        return;
    }
    ansDiv.innerHTML = scrambleAnswer.map(w =>
        `<span class="scramble-chunk" onclick="removeFromAnswer(${w.idx})">${w.text}</span>`
    ).join('');
}

function removeFromAnswer(idx) {
    scrambleAnswer = scrambleAnswer.filter(w => w.idx !== idx);
    const el = document.querySelectorAll('#scramble-words .scramble-chunk')[idx];
    if (el) el.classList.remove('placed');
    updateScrambleDisplay();
}

function checkScramble() {
    const userAns = scrambleAnswer.map(w => w.text).join('');
    const correct = userAns === scrambleItem.chinese;
    const fb = document.getElementById('scramble-feedback');
    if (correct) {
        fb.textContent = '✅ ถูกต้อง!';
        fb.className = 'feedback success';
        recordAnswer(true);
        speakChinese(scrambleItem.chinese); // เล่นเสียงเมื่อถูกต้อง
        setTimeout(renderScramble, 1500);
    } else {
        scrambleWrongCount++;
        fb.textContent = `❌ ผิด (${scrambleWrongCount}/3)`;
        fb.className = 'feedback error';
        recordAnswer(false);
        if (scrambleWrongCount >= 3) {
            fb.textContent = '❌ เฉลย';
            document.getElementById('scramble-audio').classList.remove('hidden');
            speakChinese(scrambleItem.chinese); // เล่นเสียงอัตโนมัติเมื่อผิดครบ 3 ครั้ง
            // ปิดกั้นปุ่มตรวจสอบ
            const checkBtn = document.querySelector('.btn-success');
            if (checkBtn) checkBtn.disabled = true;
        }
    }
}

// ================== Listen ==================
function renderListen() {
    currentItems = getFilteredItems();
    if (currentItems.length < 4) {
        document.getElementById('game-area').innerHTML = '<div class="empty-state"><div class="seal">少</div>ต้องการอย่างน้อย 4 รายการ</div>';
        return;
    }
    const item = currentItems[Math.floor(Math.random() * currentItems.length)];
    listenItem = item;
    const distractors = shuffle(currentItems.filter(i => i.chinese !== item.chinese)).slice(0, 3);
    let options = shuffle([item, ...distractors]);
    const seen = new Set();
    options = options.filter(o => { if (seen.has(o.chinese)) return false; seen.add(o.chinese); return true; });
    while (options.length < 4 && currentItems.length > options.length) {
        const extra = currentItems.find(i => !seen.has(i.chinese));
        if (extra) { options.push(extra); seen.add(extra.chinese); } else break;
    }
    options = shuffle(options.slice(0, 4));
    document.getElementById('game-area').innerHTML = `
        <p class="scramble-prompt">👂 ฟังเสียงและเลือกคำแปล</p>
        <div class="listen-card" onclick="speakChinese('${item.chinese.replace(/'/g,"\\'")}')">
            <span class="speaker-icon">🔊</span>${item.chinese}
        </div>
        <div class="quiz-options" id="listen-options">
            ${options.map(o => `
                <button class="quiz-option" data-correct="${o.chinese === item.chinese}"
                    onclick="answerListen(this, '${item.chinese.replace(/'/g,"\\'")}', '${item.thai.replace(/'/g,"\\'")}')">
                    ${o.thai} <small>${o.english}</small>
                </button>
            `).join('')}
        </div>
        <div id="listen-feedback" class="feedback"></div>
    `;
    document.getElementById('nav-area').innerHTML = `<button class="btn" onclick="renderListen()">🔄 ข้อต่อไป</button>`;
    // Auto-speak on load
    setTimeout(() => speakChinese(item.chinese), 400);
}

function answerListen(btn, correctChinese, correctThai) {
    const allBtns = document.querySelectorAll('#listen-options .quiz-option');
    if (btn.dataset.answered === 'true') return;
    allBtns.forEach(b => b.dataset.answered = 'true');
    const isCorrect = btn.dataset.correct === 'true';
    allBtns.forEach(b => {
        if (b.dataset.correct === 'true') b.classList.add('correct');
        if (b === btn && !isCorrect) b.classList.add('wrong');
        b.style.pointerEvents = 'none';
    });
    const fb = document.getElementById('listen-feedback');
    fb.textContent = isCorrect ? '✅ ถูกต้อง!' : `❌ คำตอบ: ${correctThai}`;
    fb.className = 'feedback ' + (isCorrect ? 'success' : 'error');
    recordAnswer(isCorrect);
}

// ================== Mode & Filter ==================
function switchMode(mode, btnEl) {
    currentMode = mode;
    document.querySelectorAll('.mode-tab').forEach(b => b.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');
    if (mode === 'quiz') renderQuiz();
    else if (mode === 'matching') renderMatching();
    else if (mode === 'scramble') renderScramble();
    else if (mode === 'listen') renderListen();
}

function setFilter(filter, btnEl) {
    currentFilter = filter;
    document.querySelectorAll('.btn-filter').forEach(b => b.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');
    switchMode(currentMode, document.querySelector(`.mode-tab[data-mode="${currentMode}"]`));
}

// ================== Theme ==================
function toggleTheme() {
    const root = document.documentElement;
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('cnlearn_theme', next); } catch(e) {}
}

function loadTheme() {
    try {
        const saved = localStorage.getItem('cnlearn_theme');
        if (saved === 'dark' || saved === 'light') {
            document.documentElement.setAttribute('data-theme', saved);
        }
    } catch(e) {}
}
loadTheme();

// ================== Init ==================
function init() {
    updateStats();
    renderQuiz();
}
init();
