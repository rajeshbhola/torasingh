const festivals = [
            {
                id: 'vid-001',
                title: 'ସଙ୍ଗୀତ ଚେୟାର ଖେଳ',
                description: ' ଓଡ଼ିଶୀର ପାରମ୍ପରିକ ଖେଳ ରଜ ପର୍ବରେ ଏକ ସଙ୍ଗୀତ ଚେୟାର ଖେଳ ପ୍ରଦର୍ଶନ।',
                thumbnail: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                videoUrl: 'assets/videos/fv1.mp4',
                festivalName: 'ରଜ ପର୍ବ',
                year: 2024,
                performanceType: 'ଖେଳ',
                tags: ['', '2024', '']
            },
            {
                id: 'vid-002',
                title: 'ଦଉଡ଼ି ଡେଇଁବା',
                description: 'ଓଡ଼ିଶୀର ପାରମ୍ପରିକ ଖେଳ ରଜ ପର୍ବରେ ଏକ ଦଉଡ଼ି ଡେଇଁବା ପ୍ରଦର୍ଶନ।',
                thumbnail: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                videoUrl: 'assets/videos/fv2.mp4',
                festivalName: 'ରଜ ପର୍ବ',
                year: 2024,
                performanceType: 'ଖେଳ',
                tags: []
            },
            {
                id: 'vid-003',
                title: 'ଦଉଡ଼ି ଡେଇଁବା',
                description: 'ଓଡ଼ିଶୀର ଆଧୁନିକ ନାଟକ ପରିବେଷଣ ରଜ ପର୍ବରେ ଏକ ଆଧୁନିକ ନାଟକ ପ୍ରଦର୍ଶନ।',
                thumbnail: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                videoUrl: 'assets/videos/fv3.mp4',
                festivalName: 'ରଜ ପର୍ବ',
                year: 2024,
                performanceType: 'ଖେଳ',
                tags: []
            },
            {
                id: 'vid-004',
                title: 'ସଙ୍ଗୀତ ଚେୟାର ଖେଳ',
                description: 'ଓଡ଼ିଶୀର ପାରମ୍ପରିକ ଖେଳ ରଜ ପର୍ବରେ ଏକ ସଙ୍ଗୀତ ଚେୟାର ଖେଳ ପ୍ରଦର୍ଶନ।',
                thumbnail: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                videoUrl: 'assets/videos/fv4.mp4',
                festivalName: 'ରଜ ପର୍ବ',
                year: 2024,
                performanceType: 'ଖେଳ',
                tags: []
            },
            {
                id: 'vid-005',
                title: 'ଫ୍ୟାଶନ ଚାଲି',
                description: 'ଓଡ଼ିଶୀର ପାରମ୍ପରିକ ନୃତ୍ୟ ରଜ ପର୍ବରେ ଏକ ଫ୍ୟାଶନ ଚାଲି ପ୍ରଦର୍ଶନ।',
                thumbnail: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                videoUrl: 'assets/videos/fv5.mp4',
                festivalName: 'ରଜ ପର୍ବ',
                year: 2024,
                performanceType: 'ନୃତ୍ୟ',
                tags: []
            },
            {
                id: 'vid-006',
                title: 'ସଙ୍ଗୀତ ଚେୟାର ଖେଳ',
                description: 'ଓଡ଼ିଶୀର ପାରମ୍ପରିକ ଖେଳ ରଜ ପର୍ବରେ ଏକ ସଙ୍ଗୀତ ଚେୟାର ଖେଳ ପ୍ରଦର୍ଶନ।',
                thumbnail: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                videoUrl: 'assets/videos/fv6.mp4',
                festivalName: 'ରଜ ପର୍ବ',
                year: 2024,
                performanceType: 'ଖେଳ',
                tags: []
            },
            {
                id: 'vid-007',
                title: 'କିଏ ପୋଛିଦେବ ମୋ ଆଖିର ଲୁହ',
                description: 'ବିଭିନ୍ନ ସାଂସ୍କୃତିକ ନାଟକ ପରିବେଷଣର ସମାରୋହ।',
                thumbnail: 'assets/images/jatra.jpg',
                videoUrl: 'assets/videos/v1.mp4',
                festivalName: 'ସାଂସ୍କୃତିକ ନାଟକ ମହୋତ୍ସବ',
                year: 2022,
                performanceType: 'ନାଟକ',
                tags: []
            },
            {
                id: 'vid-008',
                title: 'କିଏ ପୋଛିଦେବ ମୋ ଆଖିର ଲୁହ',
                description: 'ବିଭିନ୍ନ ସାଂସ୍କୃତିକ ନାଟକ ପରିବେଷଣର ସମାରୋହ।',
                thumbnail: 'assets/images/jatra.jpg',
                videoUrl: 'assets/videos/v2.mp4',
                festivalName: 'ସାଂସ୍କୃତିକ ନାଟକ ମହୋତ୍ସବ',
                year: 2022,
                performanceType: 'ନାଟକ',
                tags: []
            },
            {
                id: 'vid-009',
                title: 'କିଏ ପୋଛିଦେବ ମୋ ଆଖିର ଲୁହ',
                description: 'ବିଭିନ୍ନ ସାଂସ୍କୃତିକ ନାଟକ ପରିବେଷଣର ସମାରୋହ।',
                thumbnail: 'assets/images/jatra.jpg',
                videoUrl: 'assets/videos/v3.mp4',
                festivalName: 'ସାଂସ୍କୃତିକ ନାଟକ ମହୋତ୍ସବ',
                year: 2022,
                performanceType: 'ନାଟକ',
                tags: []
            },
            {
                id: 'vid-010',
                title: 'କିଏ ପୋଛିଦେବ ମୋ ଆଖିର ଲୁହ',
                description: 'ବିଭିନ୍ନ ସାଂସ୍କୃତିକ ନାଟକ ପରିବେଷଣର ସମାରୋହ।',
                thumbnail: 'assets/images/jatra.jpg',
                videoUrl: 'assets/videos/v4.mp4',
                festivalName: 'ସାଂସ୍କୃତିକ ନାଟକ ମହୋତ୍ସବ',
                year: 2022,
                performanceType: 'ନାଟକ',
                tags: []
            },
            {
                id: 'vid-011',
                title: 'କିଏ ପୋଛିଦେବ ମୋ ଆଖିର ଲୁହ',
                description: 'ବିଭିନ୍ନ ସାଂସ୍କୃତିକ ନାଟକ ପରିବେଷଣର ସମାରୋହ।',
                thumbnail: 'assets/images/jatra.jpg',
                videoUrl: 'assets/videos/v5.mp4',
                festivalName: 'ସାଂସ୍କୃତିକ ନାଟକ ମହୋତ୍ସବ',
                year: 2022,
                performanceType: 'ନାଟକ',
                tags: []
            },
            {
                id: 'vid-012',
                title: 'କିଏ ପୋଛିଦେବ ମୋ ଆଖିର ଲୁହ',
                description: 'ବିଭିନ୍ନ ସାଂସ୍କୃତିକ ନାଟକ ପରିବେଷଣର ସମାରୋହ।',
                thumbnail: 'assets/images/jatra.jpg',
                videoUrl: 'assets/videos/v6.mp4',
                festivalName: 'ସାଂସ୍କୃତିକ ନାଟକ ମହୋତ୍ସବ',
                year: 2022,
                performanceType: 'ନାଟକ',
                tags: []
            },
            {
                id: 'vid-013',
                title: 'କିଏ ପୋଛିଦେବ ମୋ ଆଖିର ଲୁହ',
                description: 'ବିଭିନ୍ନ ସାଂସ୍କୃତିକ ନାଟକ ପରିବେଷଣର ସମାରୋହ।',
                thumbnail: 'assets/images/jatra.jpg',
                videoUrl: 'assets/videos/v7.mp4',
                festivalName: 'ସାଂସ୍କୃତିକ ନାଟକ ମହୋତ୍ସବ',
                year: 2022,
                performanceType: 'ନାଟକ',
                tags: []
            },
            {
                id: 'vid-014',
                title: 'କିଏ ପୋଛିଦେବ ମୋ ଆଖିର ଲୁହ',
                description: 'ବିଭିନ୍ନ ସାଂସ୍କୃତିକ ନାଟକ ପରିବେଷଣର ସମାରୋହ।',
                thumbnail: 'assets/images/jatra.jpg',
                videoUrl: 'assets/videos/v8.mp4',
                festivalName: 'ସାଂସ୍କୃତିକ ନାଟକ ମହୋତ୍ସବ',
                year: 2022,
                performanceType: 'ନାଟକ',
                tags: []
            },
            {
                id: 'vid-015',
                title: 'କିଏ ପୋଛିଦେବ ମୋ ଆଖିର ଲୁହ',
                description: 'ବିଭିନ୍ନ ସାଂସ୍କୃତିକ ନାଟକ ପରିବେଷଣର ସମାରୋହ।',
                thumbnail: 'assets/images/jatra.jpg',
                videoUrl: 'assets/videos/v9.mp4',
                festivalName: 'ସାଂସ୍କୃତିକ ନାଟକ ମହୋତ୍ସବ',
                year: 2022,
                performanceType: 'ନାଟକ',
                tags: []
            },
            {
                id: 'vid-016',
                title: 'କିଏ ପୋଛିଦେବ ମୋ ଆଖିର ଲୁହ',
                description: 'ବିଭିନ୍ନ ସାଂସ୍କୃତିକ ନାଟକ ପରିବେଷଣର ସମାରୋହ।',
                thumbnail: 'assets/images/jatra.jpg',
                videoUrl: 'assets/videos/v10.mp4',
                festivalName: 'ସାଂସ୍କୃତିକ ନାଟକ ମହୋତ୍ସବ',
                year: 2022,
                performanceType: 'ନାଟକ',
                tags: []
            },
            {
                id: 'vid-017',
                title: 'କିଏ ପୋଛିଦେବ ମୋ ଆଖିର ଲୁହ',
                description: 'ବିଭିନ୍ନ ସାଂସ୍କୃତିକ ନାଟକ ପରିବେଷଣର ସମାରୋହ।',
                thumbnail: 'assets/images/jatra.jpg',
                videoUrl: 'assets/videos/v11.mp4',
                festivalName: 'ସାଂସ୍କୃତିକ ନାଟକ ମହୋତ୍ସବ',
                year: 2022,
                performanceType: 'ନାଟକ',
                tags: []
            },
            {
                id: 'vid-018',
                title: 'କିଏ ପୋଛିଦେବ ମୋ ଆଖିର ଲୁହ',
                description: 'ବିଭିନ୍ନ ସାଂସ୍କୃତିକ ନାଟକ ପରିବେଷଣର ସମାରୋହ।',
                thumbnail: 'assets/images/jatra.jpg',
                videoUrl: 'assets/videos/v12.mp4',
                festivalName: 'ସାଂସ୍କୃତିକ ନାଟକ ମହୋତ୍ସବ',
                year: 2022,
                performanceType: 'ନାଟକ',
                tags: []
            },
            {
                id: 'vid-019',
                title: 'କିଏ ପୋଛିଦେବ ମୋ ଆଖିର ଲୁହ',
                description: 'ବିଭିନ୍ନ ସାଂସ୍କୃତିକ ନାଟକ ପରିବେଷଣର ସମାରୋହ।',
                thumbnail: 'assets/images/jatra.jpg',
                videoUrl: 'assets/videos/v13.mp4',
                festivalName: 'ସାଂସ୍କୃତିକ ନାଟକ ମହୋତ୍ସବ',
                year: 2022,
                performanceType: 'ନାଟକ',
                tags: []
            },
            {
                id: 'vid-020',
                title: 'କିଏ ପୋଛିଦେବ ମୋ ଆଖିର ଲୁହ',
                description: 'ବିଭିନ୍ନ ସାଂସ୍କୃତିକ ନାଟକ ପରିବେଷଣର ସମାରୋହ।',
                thumbnail: 'assets/images/jatra.jpg',
                videoUrl: 'assets/videos/v14.mp4',
                festivalName: 'ସାଂସ୍କୃତିକ ନାଟକ ମହୋତ୍ସବ',
                year: 2022,
                performanceType: 'ନାଟକ',
                tags: []
            },
            {
                id: 'vid-021',
                title: 'ମା ଶୂଳିଆ ଦେବୀଙ୍କ ନୃତ୍ୟ',
                description: 'ମା ଶୂଳିଆ ଦେବୀଙ୍କ ପାରମ୍ପରିକ ନୃତ୍ୟ ପରିବେଷଣ।',
                thumbnail: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                videoUrl: 'assets/videos/v15.mp4',
                festivalName: 'ନୃତ୍ୟ ମହୋତ୍ସବ',
                year: 2024,
                performanceType: 'ନୃତ୍ୟ',
                tags: []
            },
            {
                id: 'vid-022',
                title: 'ମା ଶୂଳିଆ ଦେବୀଙ୍କ ନୃତ୍ୟ',
                description: 'ମା ଶୂଳିଆ ଦେବୀଙ୍କ ପାରମ୍ପରିକ ନୃତ୍ୟ ପରିବେଷଣ।',
                thumbnail: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                videoUrl: 'assets/videos/v16.mp4',
                festivalName: 'ନୃତ୍ୟ ମହୋତ୍ସବ',
                year: 2024,
                performanceType: 'ନୃତ୍ୟ',
                tags: []
            }

            
        ];