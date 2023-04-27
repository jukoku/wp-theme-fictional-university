### 유저 목록
1. ID       : kittydoe
   Email    : kittydoe@lol.com
   PassWord : 3WQ31$^B#VchpFMi(*a2B*z8

### 유저 권한
1.  kittydoe
    Events, Campuses

### Plugins
1. Advanced Custom Fields
2. All-in-One WP Migration
3. Manual Image Crop
4. Members
5. Regenerate Thumbnails

### Plugin 설정
1. ACF
  
  1. Event Date
    a. General
        Field Type : Date Picker
        Field Label : Event Date
        Field Name : event_date
        Display Format : Custom >> Y-m-d
        Return Format : Ymd
        Week Starts On : Monday
    b. Validation
        Required : On
    c. Settings
      1. Locations Rules
          Show this field group if : Post Type is equal to Event
  
  2. Page Banner
    1. Page Banner Subtitle
    a. General 
        Field Type : Text
        Field Label : Page Banner Subtitle
        Field Name : page_banner_subtitle
    b. Validation
        Required : Off
    c. Settings
      1. Locations Rules
          Show this field group if : Post Type is equal to Post 
                                    or Post Type is not equal to Post
    2. Page Banner Background Image
    a. General 
        Field Type : Text
        Field Label : Page Banner Background Image
        Field Name : page_banner_background_image
        Return Format : Image Array
        Library : All
    b. Validation
        Required : Off
    c. Settings
      1. Locations Rules
          Show this field group if : Post Type is equal to Post 
                                    or Post Type is not equal to Post

  3. Related Program
    a. General 
        Field Type : Relationship
        Field Label : Related Program(s)
        Field Name : related_programs
        Filter by Post Type : Program
        Filters : Search
        Return Format : Post Object        
    b. Validation
        Required : Off
    c. Settings
      1. Locations Rules
          Show this field group if : Post Type is equal to Event 
                                    or Post Type is equal to Professor

2. Members

  1. Administrator
    a. Events : Grant All
    b. Programs : Grant All
    c. Campuses : Grant All
    d. Professors : Grant All

  2. Event Planner
    a. Events : Grant All
  
  3. Campus Manager
    a. Campus : Grant All

### Settings

1. Membership : Anyone can register - on


### 도커 실행

docker exec -it theme_js /bin/bash

### 도커 필요없는 파일

Docker에서 nodejs 부분은 걷어내자 이 부분은 메인머신에 실려 있는 NODE를 실행해야 실시간 업데이트가 가능하므로
실시간 개발환경에서는 반드시 이 부분을 확인해야 함.

도커에서 개발환경 세팅이 가능한지 확인해야 할 사항 테스트가 필요함...