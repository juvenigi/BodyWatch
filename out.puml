@startuml
interface PersonMeasurement {
    +bloodPressure?: number | undefined
    +heartRate?: number | undefined
    +temperature?: number | undefined
    +height?: number | undefined
    +weight?: number | undefined
    +entryDate: Date
}
class Person {
    +firstName: string
    +lastName: string
    +birthdate: Date
    +measurements: PersonMeasurement[]
    +appendMeasurements(measurement: PersonMeasurement): void
    +getAllMeasurements(): PersonMeasurement[]
    +collectMeasurements(date: Date): [Date, PersonMeasurement]
    +clearMeasurements(): void
}
class SecurityUtil {
    +{static} getPasswordHash(rawPassword: string): string
}
class User {
    +id: number
    +username: string
    +password: string | undefined
    +person: Person
}
class UserOverviewComponent implements OnInit {
    +user: User
    +ngOnInit(): void
}
class UserMeasurementHistoryComponent
class MeasurementWarningComponent
class UserMeasurementChartsComponent
class UserService {
    +repo: User[]
    +createUser(user: User): User
    +updateUser(user: User): User | undefined
    +getUser(userid: number): User | undefined
}
enum ThresholdType {
    MIN
    MAX
}
interface NotificationSubscription {
    +userid: number
    +thresholdType: ThresholdType
    +measurementFilters: [MeasurementFunction, PersonMeasurement][]
}
class MeasurementService {
    +subscriptions: NotificationSubscription[]
    -userService: UserService
    +pushMeasurementToUser(userid: number, measurement: PersonMeasurement): boolean
    +getNoticationsForUser(id: number): PersonMeasurement[] | undefined
    +getNotificationForSubscription(userid: number): PersonMeasurement[]
}
class AppComponent implements OnInit {
    +title: string
    +currentUser: User | undefined
    -usersService: UserService
    -measurementService: MeasurementService
    +ngOnInit(): void
}
class UserMeasurementFormComponent implements OnInit {
    +measurement: PersonMeasurement
    +destroy: Subject<void>
    +measurementForm: FormGroup<any>
    -formBuilder: FormBuilder
    +ngOnInit(): void
    +startTimer(): void
    +assertString(input: any): string
    +initializeForm(): void
    +onSubmit(): void
    +ngOnDestroy(): void
}
class UserInitComponent implements OnInit {
    +user: User | undefined
    +greeting: string
    +triedToSubmit: boolean
    +userInitForm: FormGroup<any>
    -usersService: UserService
    +ngOnInit(): void
    +greet(): string
    +createNewUser(): void
    -initForm(): void
}
class AppModule
@enduml