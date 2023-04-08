###에러메시지 대처방법

> Ports are not available: listen tcp 0.0.0.0/50070: bind: An attempt was made to access a socket in a way forbidden by its access permissions

###관리자모드로 터미널 실행후
# 관리자 명령 프롬프트
> net stop winnat

# Ubuntu 커맨드
> docker compose up -d

# 관리자 명령 프롬프트
> net start winnat

위 순서대로 실행하면 잘 실행되는것을 확인

docker-compose.yml 파일을 상위폴더 wordpress-docker 로 복사 후 

wordpress, db, https://www.npmjs.com/package/@wordpress/scripts 설치 및 실행
> docker compose up -d

node 실행중인 컨테이너 진입
> docker exec -it theme_js /bin/bash
