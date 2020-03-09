import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthenticationService{
    constructor(
        public http: HttpClient,
        public connectionService: ConnecitonService
    ) {
        public register(registerMode1: Register): Observable<any> {
            return this.http.post('${this.connectionService.api}/mobile/Register')
        }

    }
    @Output() apiValue = new EventEmitter<string>();
    public api: string;
    constructor(
        public http: HttpClient
    ) {