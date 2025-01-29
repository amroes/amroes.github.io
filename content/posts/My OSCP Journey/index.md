---
title: My OSCP Journey, Failing the First Attempt, Passing the Second
date: 2024-10-24
---

Hello, folks!

First off, thank you for choosing to read my blog post among the many out there. Today, I’ll be sharing my experience with the infamous OSCP (Offensive Security Certified Professional), which has become a standard HR filter for any penetration testing job in the industry.
I won’t dive too deeply into what the OSCP is, as you can easily find all the details on the official website, but here’s a quick summary of what being an OSCP means:
> An OSCP has demonstrated the ability to use persistence, creativity, and perceptiveness to identify vulnerabilities and execute organized attacks under tight time constraints. They are capable of:
> - Using information gathering techniques to identify and enumerate targets running various operating systems and services.
> - Writing scripts and tools to aid in the penetration testing process.
> - Analyzing, modifying, and porting public exploit code.
> - Conducting remote, local privilege escalation, and client-side attacks.
> - Exploiting XSS, SQL injection, and file inclusion vulnerabilities in web applications.
> - Leveraging tunneling techniques to pivot between networks.

## Background

I’m a 21-year-old second-year student passionate about the offensive side of cybersecurity. Before attempting the OSCP, I had already obtained the PJPT (Practical Junior Penetration Tester) certification offered by TCM Security and completed several CTFs, which helped me get comfortable with common techniques.

Once I felt confident, I decided to take the leap and purchase the OSCP 90-day bundle to start my journey.

![1](https://i.gyazo.com/f58ccf6a848acdf796cdb609535534a9.gif)

## First Attempt — Preparation

![2](https://i.gyazo.com/8b32ed01bc96cab0a995a179560e1d46.gif)

I was incredibly motivated to get my OSCP. Despite juggling a summer internship in AI, I remained disciplined and dedicated most of my free time to going through the OSCP course. I took detailed notes and made sure to fully understand everything covered in the course.

While the course itself is a great starting point, **it’s not enough to pass the exam** on its own (more on that later). I highly recommend reading the **OffSec documentation** at the end of each section to gain a deeper understanding of the concepts.

Also, don’t hesitate to ask for help in the OffSec Discord community. It’s much easier to grasp certain concepts when professionals clarify them, rather than trying to figure out everything on your own.

I completed most of the labs, some extra miles, and all of the challenge labs — except **Skylark**. I managed to secure the 10 bonus points in around 47 days. Feeling confident, I scheduled my exam for August.

![3](https://i.gyazo.com/f60c4fb063d5be992fdc89e2530b98d9.gif)

## First Exam Attempt

I started the exam early in the morning, exactly at 11 AM, after completing the proctoring checks. After receiving the exam details and VPN, I kicked things off with the **Active Directory (AD)** set, which I felt confident in. But to my surprise, the AD environment I received was insanely difficult — yes, it was the infamous **Nightmare AD** that many OSCP candidates dread.

I fully compromised two standalone machines, but that wasn’t enough to pass. After struggling for hours and getting mentally and physically drained, I gave up two hours before the exam ended. I wrote my report afterward to get some feedback, but as many have said before, the feedback from OffSec wasn’t very helpful.

At that point, I had one choice: **Try Harder**.

![4](https://i.gyazo.com/86238bf9d12165ecb8ec55baed1e3205.png)

## 2nd Attempt — Preparation

After failing the first attempt, I took a week off to clear my head and enjoy the rest of the summer while continuing my internship. Once I felt refreshed, I returned to the **PEN-200** course (which I still had 30 days left on) and tackled **Skylark** — which, although out of scope for the exam, really helped solidify my AD knowledge and foothold techniques.

I also subscribed to **Proving Grounds (PG)** for a month and went through all the AD and Windows machines on **Lukainsagi’s** list (which can be found [here](https://docs.google.com/spreadsheets/d/18weuz_Eeynr6sXFQ87Cd5F0slOj9Z6rt/htmlview)). This time, I left only a few Linux machines untouched.

The extra preparation gave me more techniques, understanding, and most importantly — **confidence**.

I planned my exam with a new strategy: allocate specific time blocks for each machine and take plenty of rest breaks. This change in approach made a **huge** difference.

### 2nd Attempt — Exam Day

After finishing my internship and returning to university, I scheduled my second exam in early October, on a weekend. I started at 1 AM (yes, a late start!). This time, I managed to finish the **AD set** in just 5 hours, with several rest breaks in between. After compromising the Domain Controller (DC) and securing 40 points, I decided to **take a break** — I went out, cleared my mind, and returned later to tackle the standalone machines. By the way, I had **Nmap** running on the other targets during my break.

When I returned, one machine’s foothold was incredibly tricky. I wish I could spoil it here, but let’s just say it was *tricky and fun*. My advice: **Google everything**. Even if it’s just a website name or an odd service showing up in Nmap — Google it!

I got a foothold after about 8 hours and reached 60 points. With only 10 points to go, I had two options: escalate privileges on a standalone or pivot to another machine. Since I was more comfortable with Windows, I chose to focus on **privilege escalation** on the standalone. Surprisingly, the privilege escalation trick was right in front of me the whole time, but **WinPEAS** didn’t detect it.

After manually enumerating the machine, I found the trick, escalated to **SYSTEM**, and secured the last 10 points I needed to pass. The whole privilege escalation process took me about 45 minutes.

![5](https://i.gyazo.com/ff2f19b42862d8b7d2277390bef502f0.gif)

### Report Writing and Final Results

Hyped and relieved, I immediately started writing my report. Remember, no one wants to fail the OSCP because of a poor report, especially after all that hard work. My report was around 42 pages long, using the OffSec-provided template. I detailed every step, attack chain, vulnerability found, and mitigation strategy.

After about 3–4 hours, I perfected my report and submitted it. Three days later, I received the email I’d been waiting for: **I PASSED!** 

[View My credential](https://www.credential.net/6dd275c1-1f56-47fb-8349-6ed4483e5bd6#acc.9QzAO1SJ)

![6](https://i.gyazo.com/678a6d8e6482dbf6bf8774de2c36aa97.png)

### Afterthoughts

The OSCP course could use some updates to better align with the actual exam. There are key techniques needed to pass that aren’t fully covered in the course materials, and at times it feels like this is done on purpose to maintain the reputation that the **“OSCP is hard.”**

However, this has its benefits too. It forces you to think critically and conduct your own research, which is a vital skill in penetration testing.

### Next up for me?
I’m planning to pursue **OSCE3**, but before that, I’ll likely tackle some **red teaming** and web-related certifications. Don’t worry — **more blogs are coming** to document my journey and hopefully inspire other beginners, intermediates, and professionals in the field to pursue their dreams and certifications.