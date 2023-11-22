export type EventType = {
    duration: number,
    timestamp: number,
    zone: EventZoneType
}

type EventZoneType = {
    height: number,
    left: number,
    top: number,
    width: number
}

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesTypes<T>>;