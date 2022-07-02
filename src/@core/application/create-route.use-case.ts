import { LatLng, Route } from "../domain/route.entity";
import { RouteRepositoryInterface } from "../domain/route.repository";

export class CreateRouteUseCase {

    constructor(private routeRepo: RouteRepositoryInterface) { }

    async execute(input: CreateRouteInput): Promise<CreateRouteOutPut> {
        const route = Route.create(input);
        await this.routeRepo.insert(route);
        return route.toJSON();
    }
}

type CreateRouteInput = {
    title: string;
    startPosition: LatLng;
    endPosition: LatLng;
    points?: LatLng[];
}

type CreateRouteOutPut = {
    id: string;
    title: string;
    startPosition: LatLng;
    endPosition: LatLng;
    points?: LatLng[];
}