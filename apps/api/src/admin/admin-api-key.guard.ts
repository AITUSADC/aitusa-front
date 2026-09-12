import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ServiceUnavailableException,
  UnauthorizedException,
} from "@nestjs/common";
import { timingSafeEqual } from "node:crypto";
import type { Request } from "express";

@Injectable()
export class AdminApiKeyGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const expectedKey = process.env.ADMIN_API_KEY;

    if (!expectedKey) {
      throw new ServiceUnavailableException("Admin access is not configured.");
    }

    const request = context.switchToHttp().getRequest<Request>();
    const providedKey = request.header("x-admin-api-key") ?? "";
    const expectedBuffer = Buffer.from(expectedKey);
    const providedBuffer = Buffer.from(providedKey);

    if (
      expectedBuffer.length !== providedBuffer.length ||
      !timingSafeEqual(expectedBuffer, providedBuffer)
    ) {
      throw new UnauthorizedException("Invalid admin API key.");
    }

    return true;
  }
}
